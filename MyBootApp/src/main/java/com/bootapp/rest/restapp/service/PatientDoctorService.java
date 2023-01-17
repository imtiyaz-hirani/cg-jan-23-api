package com.bootapp.rest.restapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootapp.rest.restapp.data.PatientDoctorRepository;
import com.bootapp.rest.restapp.model.PatientDoctor;

@Service
public class PatientDoctorService {

	@Autowired
	private PatientDoctorRepository patientDoctorRepository;
	
	public void insert(PatientDoctor patientDoctor) {
		patientDoctorRepository.save(patientDoctor);
	}

}
