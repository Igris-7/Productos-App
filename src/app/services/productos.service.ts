import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosDescripcion } from '../interfaces/producto-descripcion.interface';
import { Productos } from '../interfaces/producto.interface';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoFiltrado : Productos[] = [];
  productos : Productos[] = [];

  private url : string = 'https://productosapp-907a9-default-rtdb.firebaseio.com';

  constructor( private http : HttpClient) { }

  cargarProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/productos_idx.json`);
  }

  getProducto(id: string): Observable<ProductosDescripcion>{
    return this.http.get<ProductosDescripcion>(`${this.url}/productos/${id}.json`);
  }

  buscarProducto( termino : string ){
    this.cargarProductos()
    .pipe(
      take(1)
    )
    .subscribe(resp => {
        this.productos = resp;

        this.productoFiltrado = this.productos.filter( producto => {
          return true;
      } );
      
    })

  }

}
