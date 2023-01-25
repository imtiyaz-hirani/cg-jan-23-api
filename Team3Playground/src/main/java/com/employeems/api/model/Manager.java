package com.employeems.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Manager {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; 
	
}
