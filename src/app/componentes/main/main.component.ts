import { Component, OnInit, Input } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/servicios/modelo/modelos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private servicios: ServiciosService) {}

  ngOnInit(): void {
    this.getAllProductos();
    
  }
  //crud crear producto
  name!: string;
  inInventory!: number ;  
  min!: number ;
  max!: number ;

  productos!: Producto[];

  crear() {
    this.crearProducto();
  }
  pintarProductos(){
    
  }

  getAllProductos() {    
    this.servicios.getAllProductosRequest().subscribe((productos) => {
      this.productos = productos;      console.log(this.productos);   });  }

  crearProducto() {
    const bodyFormulario: Producto = {
      name: this.name,
      inInventory: this.inInventory,
      enabled : "true",
      min: this.min,
      max: this.max,
    };

    this.servicios.CreaPostAction(bodyFormulario).subscribe();

    this.name = '';
    this.inInventory = 0;
    this.min = 0;
    this.max = 0;
  }
}
