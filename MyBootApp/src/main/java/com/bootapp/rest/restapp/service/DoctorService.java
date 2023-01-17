package com.bootapp.rest.restapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootapp.rest.restapp.data.DoctorRepository;
import com.bootapp.rest.restapp.model.Doctor;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	public Optional<Doctor> getDoctorById(int doctorId) {
		return doctorRepository.findById(doctorId);
	}

	public void insert(Doctor doctor) {
		doctorRepository.save(doctor);
		
	}

}
