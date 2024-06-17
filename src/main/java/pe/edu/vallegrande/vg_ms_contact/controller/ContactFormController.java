package pe.edu.vallegrande.vg_ms_contact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.vallegrande.vg_ms_contact.dto.ContactFormDTO;
import pe.edu.vallegrande.vg_ms_contact.model.ContactForm;
import pe.edu.vallegrande.vg_ms_contact.service.ContactFormService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/formulario")
public class ContactFormController {

	@Autowired
	private ContactFormService contactFormService;

	@GetMapping
	public Flux<ContactForm> getAllContactForms() {
		return contactFormService.getAllContactForms();
	}

	@GetMapping("/{id}")
	public Mono<ContactForm> getContactFormById(@PathVariable String id) {
		return contactFormService.getContactFormById(id);
	}

	@PostMapping
	public Mono<ContactForm> createContactForm(@RequestBody ContactFormDTO contactFormDTO) {
		return contactFormService.createContactForm(contactFormDTO);
	}

	@PutMapping("/{id}")
	public Mono<ContactForm> updateContactForm(@PathVariable String id, @RequestBody ContactFormDTO contactFormDTO) {
		return contactFormService.updateContactForm(id, contactFormDTO);
	}

	@PutMapping("/reactivate/{id}")
	public Mono<ContactForm> reactivateContactForm(@PathVariable String id) {
		return contactFormService.reactivateContactForm(id);
	}

	@DeleteMapping("/{id}")
	public Mono<Void> deleteContactForm(@PathVariable String id) {
		return contactFormService.deleteContactForm(id);
	}

	@DeleteMapping("/fisico/{id}")
	public Mono<String> deleteContactFormPhysically(@PathVariable String id) {
		return contactFormService.deleteContactFormPhysically(id);
	}

	@GetMapping("/active")
	public Flux<ContactForm> getActiveContactForms() {
		return contactFormService.getActiveContactForms();
	}

	@GetMapping("/inactive")
	public Flux<ContactForm> getInactiveContactForms() {
		return contactFormService.getInactiveContactForms();
	}
}