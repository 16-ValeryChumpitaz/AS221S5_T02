package pe.edu.vallegrande.vg_ms_contact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.vallegrande.vg_ms_contact.model.StudyProgramme;
import pe.edu.vallegrande.vg_ms_contact.service.StudyProgrammeService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/study-programme")
public class StudyProgrammeController {

    @Autowired
    private StudyProgrammeService studyProgrammeService;

    @PostMapping("/create")
    public Mono<StudyProgramme> create(@RequestBody StudyProgramme studyProgramme) {
        return studyProgrammeService.create(studyProgramme);
    }

    @PutMapping("/update/{id}")
    public Mono<StudyProgramme> update(@PathVariable String id , @RequestBody StudyProgramme studyProgramme) {
        return studyProgrammeService.update(id, studyProgramme);
    }

    @PutMapping("/activate/{id}")
    public Mono<StudyProgramme> activate(@PathVariable String id) {
        return studyProgrammeService.activate(id);
    }

    @PutMapping("/deactivate/{id}")
    public Mono<StudyProgramme> deactivate(@PathVariable String id) {
        return studyProgrammeService.deactivate(id);
    }

    @GetMapping("/get/{id}")
    public Mono<StudyProgramme> getById(@PathVariable String id) {
        return studyProgrammeService.getById(id);
    }

    @GetMapping("/list")
    public Flux<StudyProgramme> getAll() {
        return studyProgrammeService.getAll();
    }

    @GetMapping("/list/active")
    public Flux<StudyProgramme> getAllActive() {
        return studyProgrammeService.getAllActive();
    }

    @GetMapping("/list/inactive")
    public Flux<StudyProgramme> getAllInactive() {
        return studyProgrammeService.getAllInactive();
    }
}
