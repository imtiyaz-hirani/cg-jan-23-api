package com.bootapp.rest.restapp;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bootapp.rest.restapp.model.Employee;
import com.bootapp.rest.restapp.model.Project;
import com.bootapp.rest.restapp.service.ProjectService;

@SpringBootTest
public class ProjectServiceTest {

	@Autowired
	private ProjectService projectService; 
	@Test
	public void getProjectByEmployeeIdTest(){
		/*Prepare the Input */
		Employee e = new Employee();
		Project p1 = new Project();
		p1.setId(1);
		p1.setTitle("Banking Project");
		p1.setCredits(100);
		List<Project> list = new ArrayList<>();
		list.add(p1);
		
		e.setProjects(list);
		 /*Use Case */
		Assertions.assertEquals(list, projectService.getProjectByEmployeeId(e)); 
		
		List<Project> list1 = new ArrayList<>();
		list1.add(p1);
		list1.add(new Project());
		 /*Use Case */
		Assertions.assertNotEquals(list1, projectService.getProjectByEmployeeId(e)); 
	}
}
