import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { 
    //Recuperamos la lista de empleados del localStorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  private _empleados : IEmpleado[] = [];

  //Creamos un método get para acceder a la lista de empleados
  get empleados() : IEmpleado[] {
    return this._empleados;
  }

  agregarNuevoEmpleado(empleado: IEmpleado) {
    //Agregamos el nuevo empleado recibido a la lista
    this._empleados.push(empleado);
    //Guardamos la lista de empleados en el localStorage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(indice: number) {
    //Eliminamos el empleado de la lista
    this._empleados.splice(indice, 1);
    //Guardamos la lista de empleados en el localStorage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

}
