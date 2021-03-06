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
import com.example.demo.entities.Destino;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositories.DestinoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DestinoController {

	@Autowired
	private DestinoRepository destinoRepository;
	// get all
	@GetMapping("/destino")
	public List<Destino> getAllDestino(){
		return destinoRepository.findAll();
	}
	
	// create destino rest api
	@PostMapping("/destino")
	public Destino createDestino(@RequestBody Destino destino) {
		return destinoRepository.save(destino);
	}
	
	// get  by id rest api
	@GetMapping("/destino/{id}")
	public ResponseEntity<Destino> getDestinoById(@PathVariable Long id) {
		Destino destino = destinoRepository.findById(id)
		.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(destino);
	}
	
	// update rest api
	@PutMapping("/destino/{id}")
	public ResponseEntity<Destino> updateDestino(@PathVariable Long id, @RequestBody Destino destinoDetails){
		Destino destino = destinoRepository.findById(id)
		.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		destino.setNomeDestino(destinoDetails.getNomeDestino());
		destino.setDescricao(destinoDetails.getDescricao());
		destino.setDias(destinoDetails.getDias());
		destino.setPreco(destinoDetails.getPreco());
		Destino updatedDestino = destinoRepository.save(destino);
		return ResponseEntity.ok(updatedDestino);
	}
	
	// delete rest api
	@DeleteMapping("/destino/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino(@PathVariable Long id){
		Destino destino = destinoRepository.findById(id)
		.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		destinoRepository.delete(destino);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
