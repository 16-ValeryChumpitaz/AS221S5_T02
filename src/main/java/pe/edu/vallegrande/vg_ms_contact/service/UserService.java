package pe.edu.vallegrande.vg_ms_contact.service;

import pe.edu.vallegrande.vg_ms_contact.dto.UserDTO;
import pe.edu.vallegrande.vg_ms_contact.model.User;
import pe.edu.vallegrande.vg_ms_contact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Flux<User> getAllUsers() {
		return userRepository.findAll();
	}

	public Mono<User> getUserById(String id) {
		return userRepository.findById(id);
	}

	public Mono<User> createUser(UserDTO userDTO) {
		User user = new User();
		user.setName(userDTO.getName());
		user.setLastname_maternal(userDTO.getLastname_maternal());
		user.setLastname_paternal(userDTO.getLastname_paternal());
		user.setBirthdate(userDTO.getBirthdate());
		user.setDocument_type(userDTO.getDocument_type());
		user.setDocument_number(userDTO.getDocument_number());
		user.setEmail(userDTO.getEmail());
		user.setPhone(userDTO.getPhone());
		user.setPhone_optional(userDTO.getPhone_optional());
		user.setStatus("A");

		return userRepository.save(user);
	}

	public Mono<User> updateUser(String id, UserDTO userDTO) {
		return userRepository.findById(id).flatMap(user -> {
			user.setName(userDTO.getName());
			user.setLastname_maternal(userDTO.getLastname_maternal());
			user.setLastname_paternal(userDTO.getLastname_paternal());
			user.setBirthdate(userDTO.getBirthdate());
			user.setDocument_type(userDTO.getDocument_type());
			user.setDocument_number(userDTO.getDocument_number());
			user.setEmail(userDTO.getEmail());
			user.setPhone(userDTO.getPhone());
			user.setPhone_optional(userDTO.getPhone_optional());
			return userRepository.save(user);
		});
	}

	public Mono<Void> deleteUser(String id) {
		return userRepository.findById(id).flatMap(user -> {
			user.setStatus("I");
			return userRepository.save(user).then(Mono.empty());
		});
	}

	public Mono<User> reactivateUser(String id) {
		return userRepository.findById(id).flatMap(user -> {
			// Verificamos que el usuario exista y esté inactivo
			if (user != null && user.getStatus().equals("I")) {
				// Cambiamos el estado del usuario a activo
				user.setStatus("A");
				// Guardamos los cambios en la base de datos
				return userRepository.save(user);
			} else {
				// Si el usuario no existe o ya está activo, retornamos un error
				return Mono.error(new IllegalArgumentException("El usuario no está inactivo o no existe"));
			}
		});
	}

//	public Mono<Void> deleteUserPhysically(String id) {
//		// Primero, eliminamos físicamente el usuario de la base de datos
//		return userRepository.deleteById(id);
//	}

	public Mono<String> deleteUserPhysically(String id) {
		return userRepository.deleteById(id).then(Mono.just("MUY BIEN REGISTRO ELIMINADO PERMANENTEMENTE"));
	}

	public Flux<User> getActiveUsers() {
		return userRepository.findByStatus("A");
	}

	public Flux<User> getInactiveUsers() {
		return userRepository.findByStatus("I");
	}
	
	public Mono<User> getUserByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }
	
	/*public Mono<User> findByDocumentTypeAndDocumentNumber(String document_type, String document_number) {
        return userRepository.findByDocument_typeAndDocument_number(document_type, document_number);
    }*/
}