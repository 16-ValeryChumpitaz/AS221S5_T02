package pe.edu.vallegrande.vg_ms_contact.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "formulario")
public class ContactForm {
	@Id
	private String id;
	private String userId;
	private String description;
	private String studyProgramId;
	private String status; // Active or Inactive
}
