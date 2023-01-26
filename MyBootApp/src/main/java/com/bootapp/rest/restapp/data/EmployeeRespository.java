package com.bootapp.rest.restapp.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootapp.rest.restapp.model.Employee;

public interface EmployeeRespository extends JpaRepository<Employee, Integer>{

	@Query("select e from Employee e join e.projects p where p.id=?1")
	List<Employee> getEmployeeByProjectId(int pid);

}
