package com.bootapp.rest.restapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bootapp.rest.restapp.dto.Message;
import com.bootapp.rest.restapp.model.Department;
import com.bootapp.rest.restapp.service.DepartmentService;

@CrossOrigin(origins = {"*"})
@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@PostMapping("/api/department/add")
	public ResponseEntity<Message> postDepartment(@RequestBody Department department) {
		Message m = new Message();
		try {
			departmentService.postEmployee(department);
			m.setMsg("Department added");
			return ResponseEntity.status(HttpStatus.OK).body(m);
		}
		catch(Exception e) {
			m.setMsg("Could not process the request, Try Again");
			return ResponseEntity.status(HttpStatus.PROCESSING).body(m);
		}
			
		}
	
	@GetMapping("/api/department/all")
	public List<Department> getAll(){
		return departmentService.getAll();
	}

}
