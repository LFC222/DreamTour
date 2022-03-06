package com.example.demo.controllers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Usuario;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositories.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UsuarioController {

		 @Autowired
		private UsuarioRepository usuarioRepository;
		// get all
		@GetMapping("/usuario")
		public List<Usuario> getAllUsuario(){
			return usuarioRepository.findAll();
		}
		
		// create usuario rest api
		@PostMapping("/usuario")
		public Usuario createUsuario(@RequestBody Usuario usuario) {
			return usuarioRepository.save(usuario);
		}
		
		// get  by id rest api
		@GetMapping("/usuario/{id}")
		public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
			Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			return ResponseEntity.ok(usuario);
		}
		
		// update rest api
		@PutMapping("/usuario/{id}")
		public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails){
			Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			usuario.setNome(usuarioDetails.getNome());
			usuario.setCpf(usuarioDetails.getCpf());
			usuario.setEmail(usuarioDetails.getEmail());
			usuario.setCelular(usuarioDetails.getCelular());
			Usuario updatedUsuario = usuarioRepository.save(usuario);
			return ResponseEntity.ok(updatedUsuario);
		}
		
		// delete rest api
		@DeleteMapping("/usuario/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
			Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			usuarioRepository.delete(usuario);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}