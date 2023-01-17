package com.bootapp.rest.restapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootapp.rest.restapp.data.PatientRepository;
import com.bootapp.rest.restapp.model.Patient;

@Service
public class PatientService {
	@Autowired
	private PatientRepository patientRepository;

	public void insert(Patient patient) {
		patientRepository.save(patient);	
	}

	public List<Patient> getAllPatients() {
		return patientRepository.findAll();
	}

	public Optional<Patient> getPatientById(int id) {
		return patientRepository.findById(id);
	}
}
