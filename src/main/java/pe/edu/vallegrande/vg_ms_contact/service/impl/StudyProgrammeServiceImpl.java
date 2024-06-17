package pe.edu.vallegrande.vg_ms_contact.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.vallegrande.vg_ms_contact.model.StudyProgramme;
import pe.edu.vallegrande.vg_ms_contact.repository.StudyProgrammeRepository;
import pe.edu.vallegrande.vg_ms_contact.service.StudyProgrammeService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class StudyProgrammeServiceImpl implements StudyProgrammeService {

    @Autowired
    private StudyProgrammeRepository studyProgrammeRepository;

    @Override
    public Mono<StudyProgramme> create(StudyProgramme studyProgramme) {
        return studyProgrammeRepository.save(studyProgramme);
    }

    @Override
    public Mono<StudyProgramme> update(String id, StudyProgramme studyProgramme) {
        return studyProgrammeRepository.findById(id)
                .flatMap(existingStudyProgramme -> {
                    existingStudyProgramme.setName(studyProgramme.getName());
                    existingStudyProgramme.setModule(studyProgramme.getModule());
                    existingStudyProgramme.setTrainingLevel(studyProgramme.getTrainingLevel());
                    existingStudyProgramme.setStudyPlanType(studyProgramme.getStudyPlanType());
                    existingStudyProgramme.setCredits(studyProgramme.getCredits());
                    existingStudyProgramme.setHours(studyProgramme.getHours());
                    existingStudyProgramme.setStatus(studyProgramme.getStatus());
                    return studyProgrammeRepository.save(existingStudyProgramme);
                });
    }

    @Override
    public Mono<StudyProgramme> activate(String id) {
        return studyProgrammeRepository.findById(id)
                .flatMap(existingStudyProgramme -> {
                    existingStudyProgramme.setStatus("A");
                    return studyProgrammeRepository.save(existingStudyProgramme);
                });
    }

    @Override
    public Mono<StudyProgramme> deactivate(String id) {
        return studyProgrammeRepository.findById(id)
                .flatMap(existingStudyProgramme -> {
                    existingStudyProgramme.setStatus("I");
                    return studyProgrammeRepository.save(existingStudyProgramme);
                });
    }

    @Override
    public Mono<StudyProgramme> getById(String id) {
        return studyProgrammeRepository.findById(id);
    }

    @Override
    public Flux<StudyProgramme> getAll() {
        return studyProgrammeRepository.findAll();
    }

    @Override
    public Flux<StudyProgramme> getAllActive() {
        return studyProgrammeRepository.findByStatus("A");
    }

    @Override
    public Flux<StudyProgramme> getAllInactive() {
        return studyProgrammeRepository.findByStatus("I");
    }
}
