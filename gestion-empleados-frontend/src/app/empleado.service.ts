//12.-Lo creamos como servicio
// ng g s empleados
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  //14.- Agrego URL del Back-end
  private baseURL = "http://localhost:8080/miweb/v1/empleados";

  //14.1
  constructor(private httpClient: HttpClient) { }

  //14.2 Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados(): Observable<Empleados[]> {
    return this.httpClient.get<Empleados[]>(`${this.baseURL}`);
  }

  //Metodo para registrar un empleado
  registrarEmpleados(empleados:Empleados) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleados);
  }

  //Metodo para actualizar un empleado
  actualizarEmpleados(id:number,empleado:Empleados) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //Metodo para obtener o buscar un numero
  obtenerEmpleadosPorId(id:number) : Observable<Empleados>{
    return this.httpClient.get<Empleados>(`${this.baseURL}/${id}`);
  }

  //Metodo para eliminar numero
  eliminarEmpleados(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }


}
