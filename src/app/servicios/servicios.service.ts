import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto, Venta } from './modelo/modelos';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor(private http: HttpClient) {}

  private URL_HTTP: String = 'http://localhost:8080';

  // bringAllPost(): Observable<Post[]> {
  //   return this.client.get<Post[]>(
  //     this.BETTA_URL_GET
  //   );
  // }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getAllProductosRequest(): Observable<Producto[]> {
    console.log("se hizo peticion")
    return this.http.get<Producto[]>(`http://localhost:8080/productos/all`);
  }
 borrarProductoRequest(name : string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/producto/delete/${name}`);
  }
  
  modificarProductoRequest(name :string,max: number) {
    console.log(name,max)
    return this.http.put(
      `http://localhost:8080/productos/update/${name}`,     {max : max},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  getAllHistorialRequest(): Observable<Venta[]> {
    
    return this.http.get<Venta[]>(`http://localhost:8080/historial/all`);
  }

  CrearProductoRequest(bodyFormulario : Producto):Observable<Object> {
    console.log(bodyFormulario)
    return this.http.post(
      'http://localhost:8080/productos/save',      bodyFormulario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  CrearVentaRequest(bodyFormulario : Venta):Observable<Object> {
    console.log(bodyFormulario)
    return this.http.post(
      'http://localhost:8080/compras/save',      bodyFormulario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
