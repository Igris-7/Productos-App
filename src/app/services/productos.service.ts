import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url : string = 'https://productosapp-907a9-default-rtdb.firebaseio.com';

  constructor( private http : HttpClient) { }

  cargarProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/productos_idx.json`);
  }

}
