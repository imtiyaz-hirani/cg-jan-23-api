package com.bootapp.rest.restapp.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootapp.rest.restapp.model.Person;

public interface PersonRepository extends JpaRepository<Person, Integer>{

	@Query("select p from Person p where p.email=?1")
	Person getPersonByEmail(String email);

}
