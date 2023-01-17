package com.bootapp.rest.restapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
