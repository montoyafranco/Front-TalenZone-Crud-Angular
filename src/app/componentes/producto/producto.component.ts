import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/servicios/modelo/modelos';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private servicios: ServiciosService) { }

  ngOnInit(): void {
  }
//crud crear producto

name!: string;
inInventory!: number;
min!: number;
max!: number;


crear() {
  
  this.crearProducto();
  
}

crearProducto() {
  
  const bodyFormulario: Producto = {
    name: this.name,
    inInventory: this.inInventory,
    enabled: 'true',
    min: this.min,
    max: this.max,
  };

  this.servicios.CrearProductoRequest(bodyFormulario).subscribe();
  

  this.name = '';
  this.inInventory = 0;
  this.min = 0;
  this.max = 0;
}

}

