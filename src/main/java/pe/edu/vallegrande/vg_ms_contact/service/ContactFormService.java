package pe.edu.vallegrande.vg_ms_contact.service;

import pe.edu.vallegrande.vg_ms_contact.dto.ContactFormDTO;
import pe.edu.vallegrande.vg_ms_contact.model.ContactForm;
import pe.edu.vallegrande.vg_ms_contact.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ContactFormService {

	@Autowired
	private ContactFormRepository contactFormRepository;

	public Flux<ContactForm> getAllContactForms() {
		return contactFormRepository.findAll();
	}

	public Mono<ContactForm> getContactFormById(String id) {
		return contactFormRepository.findById(id);
	}

	public Mono<ContactForm> createContactForm(ContactFormDTO contactFormDTO) {
		ContactForm contactForm = new ContactForm();
		contactForm.setUserId(contactFormDTO.getUserId());
		contactForm.setDescription(contactFormDTO.getDescription());
		contactForm.setStudyProgramId(contactFormDTO.getStudyProgramId());
		contactForm.setStatus("A");

		return contactFormRepository.save(contactForm);
	}

	public Mono<ContactForm> updateContactForm(String id, ContactFormDTO contactFormDTO) {
		return contactFormRepository.findById(id).flatMap(contactForm -> {
			contactForm.setUserId(contactFormDTO.getUserId());
			contactForm.setDescription(contactFormDTO.getDescription());
			contactForm.setStudyProgramId(contactFormDTO.getStudyProgramId());
			return contactFormRepository.save(contactForm);
		});
	}

	public Mono<Void> deleteContactForm(String id) {
		return contactFormRepository.findById(id).flatMap(contactForm -> {
			contactForm.setStatus("I");
			return contactFormRepository.save(contactForm).then(Mono.empty());
		});
	}

	public Mono<ContactForm> reactivateContactForm(String id) {
		return contactFormRepository.findById(id).flatMap(contactForm -> {
			if (contactForm != null && contactForm.getStatus().equals("I")) {
				contactForm.setStatus("A");
				return contactFormRepository.save(contactForm);
			} else {
				return Mono
						.error(new IllegalArgumentException("El formulario de contacto no está inactivo o no existe"));
			}
		});
	}

	public Mono<String> deleteContactFormPhysically(String id) {
		return contactFormRepository.deleteById(id).then(Mono.just("Formulario de contacto eliminado permanentemente"));
	}

	public Flux<ContactForm> getActiveContactForms() {
		return contactFormRepository.findByStatus("A");
	}

	public Flux<ContactForm> getInactiveContactForms() {
		return contactFormRepository.findByStatus("I");
	}
}