package com.bootapp.rest.restapp.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bootapp.rest.restapp.data.UserRepository;
import com.bootapp.rest.restapp.model.Department;
import com.bootapp.rest.restapp.model.Employee;
import com.bootapp.rest.restapp.model.Project;
import com.bootapp.rest.restapp.model.User;
import com.bootapp.rest.restapp.service.DepartmentService;
import com.bootapp.rest.restapp.service.EmployeeService;
import com.bootapp.rest.restapp.service.ProjectService;

@RestController
public class EmployeeController {

	@Autowired
	private DepartmentService departmentService;
	
	@Autowired
	private EmployeeService employeeService; 
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("/api/hello")
	public String sayHello() {
		return "hello spring boot";
	}
	
	@PostMapping("/api/employee/add/{did}")
	public ResponseEntity<String> postEmployee(@RequestBody Employee employee, 
							 @PathVariable("did") int did) {
		//Fetch Department Object based on did. 
		Department department = departmentService.getDepartmentById(did);
		
		//Attach department object to employee
		employee.setDepartment(department);
		
		employee.setJoiningDate(LocalDate.now());
		
		//Fetch User info from employee input and save it in DB 
		User user = employee.getUser(); //I have username and password 
		//I will assign the role
		user.setRole("EMPLOYEE");
		
		//Converting plain text password into encoded text
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		//attach encoded password to user
		user.setPassword(encodedPassword);
		
		user  = userRepository.save(user);
		
		//Attach user object to employee
		employee.setUser(user);
		
		//save the employee object
		employeeService.postEmployee(employee); 
		
		return ResponseEntity.status(HttpStatus.OK).body("Employee Posted..");
	}
	
	/* Get API
	  display all employees on the basis of department ID
	  PathVariable: did  */
	
	@GetMapping("/api/employee/department/{did}")
	public List<Employee> showEmployeesByDeptId(@PathVariable("did") int did) {
		List<Employee> list = employeeService.getEmployeeByDepartmentId(did);
		return list;
	}
	
	/* GET: Display employees earning salary more than given salary
	 * and belong to given city  */
	
	@GetMapping("/api/employee/salary/city/{salary}/{city}")
	public List<Employee> getEmployeesBySalaryAndCity(
			@PathVariable("salary") double salary, 
			@PathVariable("city") String city) {
		
		List<Employee> list = employeeService.getEmployeesBySalaryAndCity(salary,city);
		return list; 
	}
	
	
	@PutMapping("/api/employee/edit/{eid}")
	public ResponseEntity<String> editEMployee(@PathVariable("eid") int eid, 
							@RequestBody Employee employeeNew) {
		/* Step 1: check if this id given is valid by fetching the record from DB */
		Optional<Employee> optional = employeeService.getEmployeeById(eid);
		
		if(!optional.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid ID");
		}
		
		Employee employeeDB = optional.get(); //User given employee value
		
		/* Step 2: Set New value to DB value */
		if(employeeNew.getName() != null)
			employeeDB.setName(employeeNew.getName());
		if(employeeNew.getCity() != null)
			employeeDB.setCity(employeeNew.getCity());
		if(employeeNew.getSalary() != 0.0)
			employeeDB.setSalary(employeeNew.getSalary());
		if(employeeNew.getJoiningDate() != null)
			employeeDB.setJoiningDate(employeeNew.getJoiningDate());
		if(employeeNew.getGender() != null)
			employeeDB.setGender(employeeNew.getGender());
		
		/* Save updated employeeDB value in DB */
		employeeService.postEmployee(employeeDB);
		return ResponseEntity.status(HttpStatus.OK).body("Employee record Edited..");
		
	}
	
	
	@GetMapping("/api/employee/project/{pid}")
	public ResponseEntity<Object> getEmployeeByProject(@PathVariable("pid") int pid){
		/* Validate ID: fetch project from DB */
		Optional<Project> optional = employeeService.getProjectById(pid);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid ID"); 
		
		Project project = optional.get();
		
		List<Employee> list = employeeService.getEmployeeByProjectId(pid);
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	
	@PostMapping("/api/project")
	public ResponseEntity<String> postProejct(@RequestBody Project project) {
		projectService.insertProject(project);
		return ResponseEntity.status(HttpStatus.OK).body("Project Posted..");
	}
	
	@PostMapping("/api/employee/project/{eid}/{pid}")
	public ResponseEntity<String> assignEmployeeToProject(@PathVariable("eid") int eid ,
								   @PathVariable("pid") int pid) {
		
		Optional<Employee> optionalE = employeeService.getEmployeeById(eid);
		if(!optionalE.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid ID");
		}
		
		Optional<Project> optionalP = employeeService.getProjectById(pid);
		if(!optionalP.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid ID");
		}
		
		Employee e = optionalE.get();
		Project p = optionalP.get();
		
		//List of projects that employee is currently working on
		List<Project> listProjects = e.getProjects();
		//ADD new project p to this list
		listProjects.add(p);
		
		//Attach the list to employee
		e.setProjects(listProjects);
		
		//save employee in DB
		employeeService.postEmployee(e);
		return ResponseEntity.status(HttpStatus.OK).body("Project assigned to Employee");
	}
	
	@GetMapping("/api/project/employee/{eid}")
	public ResponseEntity<Object> getProjectByEmployeeId(@PathVariable("eid") int eid) {
		/* Validate ID: fetch project from DB */
		Optional<Employee> optional = employeeService.getEmployeeById(eid);
		if(!optional.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid ID"); 
		
		Employee employee = optional.get();
		
		List<Project> list =   projectService.getProjectByEmployeeId(employee);
		return ResponseEntity.status(HttpStatus.OK).body(list); 
	}
}







