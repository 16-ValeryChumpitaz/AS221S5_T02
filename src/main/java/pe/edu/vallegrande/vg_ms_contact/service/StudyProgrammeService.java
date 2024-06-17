package pe.edu.vallegrande.vg_ms_contact.service;

import pe.edu.vallegrande.vg_ms_contact.model.StudyProgramme;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface StudyProgrammeService {

    Mono<StudyProgramme> create(StudyProgramme studyProgramme);
    Mono<StudyProgramme> update(String id, StudyProgramme studyProgramme);
    Mono<StudyProgramme> activate(String id);
    Mono<StudyProgramme> deactivate(String id);
    Mono<StudyProgramme> getById(String id);
    Flux<StudyProgramme> getAll();
    Flux<StudyProgramme> getAllActive();
    Flux<StudyProgramme> getAllInactive();

}
