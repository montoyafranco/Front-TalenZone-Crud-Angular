import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './modelo/modelos';

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
    return this.http.get<Producto[]>(`http://localhost:8080/productos/all`);
  }

  CreaPostAction(bodyFormulario : Producto):Observable<any> {
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
}
