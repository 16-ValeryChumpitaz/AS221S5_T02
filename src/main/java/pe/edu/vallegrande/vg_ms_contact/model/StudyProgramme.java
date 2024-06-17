package pe.edu.vallegrande.vg_ms_contact.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "study_programme")
public class StudyProgramme {

    @Id
    private String id;
    private String name;
    private String module;
    private String trainingLevel;
    private String studyPlanType;
    private String credits;
    private String hours;
    private String status = "A";
}
