package pe.edu.vallegrande.vg_ms_contact.exception;

import org.springframework.stereotype.Component;

@Component
public class DocumentValidator {
    // Implement your validation logic here, for example:
    public boolean isValidDocument(String documentType, String documentNumber) {
        // Validation logic
        return true;
    }
}