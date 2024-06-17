package pe.edu.vallegrande.vg_ms_contact.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import pe.edu.vallegrande.vg_ms_contact.model.StudyProgramme;
import reactor.core.publisher.Flux;

public interface StudyProgrammeRepository extends ReactiveMongoRepository<StudyProgramme, String> {

    Flux<StudyProgramme> findByStatus(String status);
}
