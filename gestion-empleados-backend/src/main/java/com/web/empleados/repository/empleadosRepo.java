package com.web.empleados.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.web.empleados.models.empleadosWeb;

@Repository
public interface empleadosRepo extends JpaRepository<empleadosWeb, Long> {

}
