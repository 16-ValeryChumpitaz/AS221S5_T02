package pe.edu.vallegrande.vg_ms_contact.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import pe.edu.vallegrande.vg_ms_contact.model.ContactForm;
import reactor.core.publisher.Flux;

public interface ContactFormRepository extends ReactiveCrudRepository<ContactForm, String> {
	Flux<ContactForm> findByStatus(String status);
}