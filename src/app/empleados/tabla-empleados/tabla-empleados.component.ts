import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css'
})
export class TablaEmpleadosComponent {
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleados = this.empleadosService.empleados;
  }

  eliminarEmpleado(indice: number) {
    this.empleadosService.eliminarEmpleado(indice);
    this.cargarEmpleados();
  }



}
