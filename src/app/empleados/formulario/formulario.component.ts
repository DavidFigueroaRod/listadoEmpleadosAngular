import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nuevo: IEmpleado = {
    nombre: '',
    correo: '',
    telefono:'',
    fecha_nacimiento: new Date(),
    sexo: ''
  }

  constructor(private empleadoService : EmpleadosService) { }

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }
    if(this.nuevo.correo.trim().length === 0) {
      return; 
    }
    if(this.nuevo.telefono.trim().length === 0) {
      return; 
    }
    if(this.nuevo.sexo.trim().length === 0) {
      return; 
    }

    //Agregamos el nuevo empleado por medio del servicio
    this.empleadoService.agregarNuevoEmpleado(this.nuevo);
    //Limpiamos el formulario
    this.nuevo = {
      nombre: '',
      correo: '',
      telefono:'',
      fecha_nacimiento: new Date(),
      sexo: ''
    }

  }



}
