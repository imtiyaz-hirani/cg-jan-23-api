package com.bootapp.rest.restapp.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootapp.rest.restapp.data.EmployeeRespository;
import com.bootapp.rest.restapp.data.ProjectRepository;
import com.bootapp.rest.restapp.model.Employee;
import com.bootapp.rest.restapp.model.Project;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRespository employeeRepository; 
	@Autowired
	private ProjectRepository projectRepository;
	
	public void postEmployee(Employee employee) {
		// save employee in DB 
		employeeRepository.save(employee);
		
	}

	public List<Employee> getEmployeeByDepartmentId(int did) {
		// Fetch all employees from the DB 
		List<Employee> list = employeeRepository.findAll();
		
		List<Employee> filteredList = 
				list.stream() 
					.filter(e->e.getDepartment().getId() == did)
					.collect(Collectors.toList());
		
		return filteredList;
	}

	public List<Employee> getEmployeesBySalaryAndCity(double salary, String city) {
		List<Employee> list = employeeRepository.findAll();
		List<Employee> filteredList = 
				list.stream()
					.filter(e->e.getCity().equals(city))
					.filter(e->e.getSalary() > salary)
					.collect(Collectors.toList());
		
		return filteredList;
	}

	public Optional<Employee> getEmployeeById(int eid) {
		  
		return employeeRepository.findById(eid);
	}

	public Optional<Project> getProjectById(int pid) {
		// TODO Auto-generated method stub
		return projectRepository.findById(pid);
	}

	public List<Employee> getEmployeeByProjectId(int pid) {
		 
		return employeeRepository.getEmployeeByProjectId(pid);
	}

}








