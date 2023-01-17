package com.bootapp.rest.restapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootapp.rest.restapp.model.Course;
import com.bootapp.rest.restapp.service.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {

	@Autowired
	private CourseService courseService; 
	
	/* Course POST api*/
	@PostMapping("/add")
	public ResponseEntity<String> postCourse(@RequestBody Course course) {
		courseService.postCourse(course);
		return ResponseEntity.status(HttpStatus.OK).body("Course Posted");
	}
	
	/* Get All API */
	
	/* Get By Id */
	
}
