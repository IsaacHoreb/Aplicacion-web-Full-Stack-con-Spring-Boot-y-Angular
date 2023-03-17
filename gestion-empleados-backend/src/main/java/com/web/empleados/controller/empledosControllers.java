package com.web.empleados.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.empleados.models.empleadosWeb;
import com.web.empleados.repository.empleadosRepo;

@RestController
@RequestMapping("/miweb/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class empledosControllers {

	@Autowired // Hacer_instancia_inyectada
	private empleadosRepo repositorio;

	// Este_metodo _sirve _para _listar _todos _los _empleados
	@GetMapping("/empleados")
	public List<empleadosWeb> listarTodosEmpleados() {
		return repositorio.findAll();
	}

	// Metodo_para _guardar _un _empleados
	@PostMapping("/empleados")
	public empleadosWeb guardarEmpleados(@RequestBody empleadosWeb empleado) {
		return repositorio.save(empleado);
	}

	// Para_obtener el _empleado _por ID
	@GetMapping("/empleados/{id}")
	public ResponseEntity<empleadosWeb> obtenerEmpleadoPorId(@PathVariable Long id) {
		empleadosWeb empleado = repositorio.findById(id)
				.orElseThrow(() -> new com.web.empleados.excepcion.ResourceNotFoundException(
						"\nNo existe el Empleado --> " + id + "\n"));
		return ResponseEntity.ok(empleado);
	}

	// Metodo_para_actualizar
	@PutMapping("/empleados/{id}")
	public ResponseEntity<empleadosWeb> actualizarEmpleados(@PathVariable Long id,
			@RequestBody empleadosWeb detallesEmpleados) {
		empleadosWeb empleado = repositorio.findById(id)
				.orElseThrow(() -> new com.web.empleados.excepcion.ResourceNotFoundException(
						"\nNo existe el Empleado --> " + id + "\n"));

		empleado.setNombres(detallesEmpleados.getNombres());
		empleado.setApellidos(detallesEmpleados.getApellidos());
		empleado.setEmial(detallesEmpleados.getEmial());

		empleadosWeb empleadoActualizado = repositorio.save(empleado);
		return ResponseEntity.ok(empleadoActualizado);
	}

	// Este_paso_sirve _para _eliminar _un _empleado
	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarEmpleados(@PathVariable Long id) {
		empleadosWeb empleados = repositorio.findById(id)
				.orElseThrow(() -> new com.web.empleados.excepcion.ResourceNotFoundException(
						"\nNo existe el Empleado --> " + id + "\n"));

		repositorio.delete(empleados);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}

}
