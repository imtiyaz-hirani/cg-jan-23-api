package com.bootapp.rest.restapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootapp.rest.restapp.exception.ResourceNotFoundException;
import com.bootapp.rest.restapp.model.Doctor;
import com.bootapp.rest.restapp.service.DoctorService;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	@PostMapping("/add")
	public ResponseEntity<String> postDoctor(@RequestBody Doctor doctor) {
		doctorService.insert(doctor);
		return ResponseEntity.status(HttpStatus.OK).body("Doctor Posted");
	}
	
	@GetMapping("/getone/{id}")
	public Doctor getDoctorById(@PathVariable("id") int id) {
		Optional<Doctor> optional = doctorService.getDoctorById(id);
		if(!optional.isPresent())
			throw new ResourceNotFoundException("Invalid ID");
		
		return optional.get();
	}
}
