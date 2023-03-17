import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-empleados-detalles',
  templateUrl: './empleados-detalles.component.html',
  styleUrls: ['./empleados-detalles.component.css']
})

//25.1 - Agregaremos lo siguiente
export class EmpleadosDetallesComponent implements OnInit {

  id: number;
  empleado: Empleados;
  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleados();
    this.empleadoServicio.obtenerEmpleadosPorId(this.id).subscribe(dato => {
    this.empleado = dato;
    });
  }

}
