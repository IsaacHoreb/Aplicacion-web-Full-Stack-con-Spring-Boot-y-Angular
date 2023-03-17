import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';

//13.- Agregamos e importamos el HttpClientModule ---------
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component'
import { FormsModule } from '@angular/forms';
import { EmpleadosDetallesComponent } from './empleados-detalles/empleados-detalles.component'; //19. Agregamos e importamos

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadosComponent,
    RegistrarEmpleadoComponent,
    EmpleadosDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //13.1 Añadir despues de import
    FormsModule  //19.1-agrego
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
