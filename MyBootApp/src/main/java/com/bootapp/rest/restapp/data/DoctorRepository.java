package com.bootapp.rest.restapp.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootapp.rest.restapp.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer>{

}
