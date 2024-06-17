package pe.edu.vallegrande.vg_ms_contact.controller;

import pe.edu.vallegrande.vg_ms_contact.dto.UserDTO;
import pe.edu.vallegrande.vg_ms_contact.model.User;
import pe.edu.vallegrande.vg_ms_contact.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping
	public Flux<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/{id}")
	public Mono<User> getUserById(@PathVariable String id) {
		return userService.getUserById(id);
	}

	@PostMapping
	public Mono<User> createUser(@RequestBody UserDTO userDTO) {
		return userService.createUser(userDTO);
	}

	@PutMapping("/{id}")
	public Mono<User> updateUser(@PathVariable String id, @RequestBody UserDTO userDTO) {
		return userService.updateUser(id, userDTO);
	}

	@PutMapping("/reactivate/{id}")
	public Mono<User> reactivateUser(@PathVariable String id) {
		return userService.reactivateUser(id);
	}

	@DeleteMapping("/{id}")
	public Mono<Void> deleteUser(@PathVariable String id) {
		return userService.deleteUser(id);
	}

	@DeleteMapping("/fisico/{id}")
	public Mono<String> deleteUserPhysically(@PathVariable String id) {
		return userService.deleteUserPhysically(id);
	}

	@GetMapping("/active")
	public Flux<User> getActiveUsers() {
		return userService.getActiveUsers();
	}

	@GetMapping("/inactive")
	public Flux<User> getInactiveUsers() {
		return userService.getInactiveUsers();
	}
	
	@GetMapping("/buscarPorCelular/{phone}")
    public Mono<User> getUserByPhone(@PathVariable String phone) {
        return userService.getUserByPhone(phone);
    }
	
	/*@GetMapping("/find/{document_type}/{document_number}")
    public Mono<User> getUserByDocument(@PathVariable String document_type, @PathVariable String document_number) {
        return userService.findByDocumentTypeAndDocumentNumber(document_type, document_number);
    }
	
	@GetMapping("/user")
    public Mono<User> getUserByDocument(@RequestParam String documentType, @RequestParam String documentNumber) {
        return userService.findByDocumentTypeAndDocumentNumber(documentType, documentNumber);
    }*/
	
	
}