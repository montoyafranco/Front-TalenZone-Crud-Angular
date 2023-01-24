import { Component, OnInit, Input } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { FormsModule } from '@angular/forms';
import {
  Producto,
  ProductoVenta,
  Venta,
} from 'src/app/servicios/modelo/modelos';

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
  inInventory!: number;
  min!: number;
  max!: number;

  @Input() productos!: Producto[];

  //aca datos de venta
  date!: string;
  id!: number;
  idType!: string;
  clientName!: string;
  products: ProductoVenta[] = [];
  //ojo aca products asi se llama el objeto adentro de VENTA para el JSON

  eliminarProducto(data: any) {
    console.log(data);
    this.servicios.borrarProductoRequest(data).subscribe(console.log);
    setTimeout(() => {
      this.getAllProductos();
    }, 1000);
  }
  modificarProducto(name: any, inventario: any) {
    var nuevoMax = prompt('Ingrese el maximo a modificar ');
    console.log(nuevoMax);
    var nuevoDato = parseInt(nuevoMax!);
    console.log(nuevoDato);
    this.servicios.modificarProductoRequest(name, nuevoDato).subscribe();
    setTimeout(() => {
      this.getAllProductos();
    }, 1000);
  }

  getAllProductos() {
    this.servicios.getAllProductosRequest().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }

  crear() {
    this.crearProducto();
  }
  crearVenta() {
    const bodyFormulario: Venta = {
      date: this.date,
      id: this.id,
      idType: this.idType,
      clientName: this.clientName,
      products: this.products,
    };
    console.log(bodyFormulario);

    // this.servicios.CrearProductoRequest(bodyFormulario).subscribe();

    // this.name = '';
    // this.inInventory = 0;
    // this.min = 0;
    // this.max = 0;
  }
  agregarProductoCarro(name: any) {
    var cantidadASumarAlCarro = prompt(
      'Ingrese la cantidad que desea comprar de este producto'
    );

    var datoFormateado = parseInt(cantidadASumarAlCarro!);

    const productoASumar: ProductoVenta = {
      name: name,
      quantity: datoFormateado,
    };

    let bandera : boolean = false

    this.products.forEach((productito) => {
      if (productito.name === name) {
        if (true){
          console.log('si existe');
          bandera = true
        productito.name = name
        productito.quantity = datoFormateado

        } 
        

        // let verproductito = productito
        // console.log(verproductito)
        // console.log(productito)
        //  this.products.push(verproductito);

        

      } 
      
    });
    if(bandera == false){
      this.products.push(productoASumar);
      bandera = false


    }

   

    console.log('soy bodyform linea100 ', productoASumar);
    
    
    console.log(this.products);
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
