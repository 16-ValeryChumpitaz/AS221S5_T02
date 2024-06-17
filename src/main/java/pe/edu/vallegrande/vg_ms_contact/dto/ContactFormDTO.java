package pe.edu.vallegrande.vg_ms_contact.dto;

import lombok.Data;

@Data
public class ContactFormDTO {
	private String userId;
	private String description;
	private String studyProgramId;
	private String status; // Active or Inactive
}
