package pe.edu.vallegrande.vg_ms_contact.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "contactanos")
public class User {
    @Id
    private String id;
    private String name;
    private String lastname_maternal;
    private String lastname_paternal;
    private String birthdate;
    private String document_type;
    private String document_number;
    private String email;
    private String phone;
    private String phone_optional;
    private String status = "A";
}
