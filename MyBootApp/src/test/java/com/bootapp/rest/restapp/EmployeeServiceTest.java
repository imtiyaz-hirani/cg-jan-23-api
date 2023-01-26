package com.bootapp.rest.restapp;

import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bootapp.rest.restapp.data.EmployeeRespository;
import com.bootapp.rest.restapp.model.Employee;
import com.bootapp.rest.restapp.service.EmployeeService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class EmployeeServiceTest {

	@Autowired
	@InjectMocks
	private EmployeeService employeeService;
	
	@Mock
	private EmployeeRespository employeeRepository; 
	
	@Test
	public void getProjectByIdTest(){
		Employee emp = new Employee();
		emp.setName("swati kadam");
		//convert emp object into Optional
		when(employeeRepository.findById(29)).thenReturn(Optional.of(emp));
		Assertions.assertEquals("swati kadam", employeeService.getEmployeeById(29).get().getName());
	}
}
