package pe.edu.vallegrande.vg_ms_contact.repository;

import pe.edu.vallegrande.vg_ms_contact.model.User;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface UserRepository extends ReactiveMongoRepository<User, String> {
    Flux<User> findByStatus(String status);
    Mono<User> findByPhone(String phone); 
    /*Mono<User> findByDocument_typeAndDocument_number(String document_type, String document_number);*/
}
