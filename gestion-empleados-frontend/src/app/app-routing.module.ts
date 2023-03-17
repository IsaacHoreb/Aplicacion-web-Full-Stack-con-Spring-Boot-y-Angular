import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosDetallesComponent } from './empleados-detalles/empleados-detalles.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

//16.- Agregamos las rutas
const routes: Routes = [
  { path: 'empleados', component: ListarEmpleadosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent }, //18.1 Agregamos
  {path : 'empleados-detalles/:id',component : EmpleadosDetallesComponent} //27.- Agremamo ruta de Detalles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
