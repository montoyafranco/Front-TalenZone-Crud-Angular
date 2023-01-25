import { Component, Input, OnInit } from '@angular/core';
import { Historial, Venta } from 'src/app/servicios/modelo/modelos';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { ProductoVenta } from 'src/app/servicios/modelo/modelos';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  constructor(
    private servicios: ServiciosService
  ) { }

  ngOnInit(): void {
    this.getAllProductos()
  }
  @Input() ventas!: Historial[];
  @Input() productito!:[];

  getAllProductos() {
    this.servicios.getAllHistorialRequest().subscribe((productos) => {
      this.ventas = productos;
      

      console.log(this.ventas);
    });
  }

}
