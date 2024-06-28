import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    CabeceraComponent,
    FormularioComponent,
    TablaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabeceraComponent,
    FormularioComponent,
    TablaEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ],
})
export class EmpleadosModule { }
