package com.bootapp.rest.restapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootapp.rest.restapp.data.ProjectRepository;
import com.bootapp.rest.restapp.model.Employee;
import com.bootapp.rest.restapp.model.Project;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	
	
	public void insertProject(Project project) {
		projectRepository.save(project);
		
	}
	 
	public List<Project> getProjectByEmployeeId(Employee employee) {
		return employee.getProjects();
	}

}
