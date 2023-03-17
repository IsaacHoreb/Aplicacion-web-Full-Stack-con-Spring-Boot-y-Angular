package com.web.empleados.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "web")
public class empleadosWeb {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nombre", length = 60, nullable = false)
	private String nombres;

	@Column(name = "apellidos", length = 60, nullable = false)
	private String apellidos;

	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String emial;

	@Column(name = "telefono", length = 20, nullable = false)
	private String telefono;

	@Column(name = "direccion", length = 80, nullable = false)
	private String direccion;

	public empleadosWeb(Long id, String nombres, String apellidos, String emial, String telefono, String direccion) {
		super();
		this.id = id;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.emial = emial;
		this.telefono = telefono;
		this.direccion = direccion;
	}

	public empleadosWeb() {
		super();
	}

	public empleadosWeb(Long id) {
		super();
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmial() {
		return emial;
	}

	public void setEmial(String emial) {
		this.emial = emial;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}
