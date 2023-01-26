package com.bootapp.rest.restapp.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootapp.rest.restapp.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer>{

}
