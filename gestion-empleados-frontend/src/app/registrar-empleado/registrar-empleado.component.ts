import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados';
import { Route, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})

//20.-Agregmaos e implementamos el OnInit
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleados = new Empleados(); //20.1 Instancia

  //22.- Agregamos
  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.empleado); //20.-2 El console se  agrega
  }

  //22.1 creamo el metodo
  irALaListaDeEmpleados() {
    this.router.navigate(['/Empleados']);
  }

  guardarEmpleado() { //23.- Creamos metodo
    this.empleadoServicio.registrarEmpleados(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, Error => console.log(Error));
  }

  onSubmit() {
    //console.log(this.empleado); //21.1 AGREAMOS
    this.guardarEmpleado(); //23.1- Se trae de registrar-empleado.component.html
  }

}