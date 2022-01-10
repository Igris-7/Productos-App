import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { switchMap, tap } from "rxjs/operators";
import { ProductosDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  producto!: ProductosDescripcion;
  productoId !: string;

  constructor( private route: ActivatedRoute,
               private productoService : ProductosService) { }

  ngOnInit(): void {

     this.route.params
      .subscribe( parametros => {
          this.productoService.getProducto( parametros['id'] )
            .subscribe( producto => {
              this.producto = producto;
              this.productoId = parametros['id'];
            });
      });

    //Para estar pendiente de los parámetros de la ruta ( PARAMS )

/*     this.route.params
      .pipe(
        switchMap( ({id}) => this.productoService.getProducto(id)),
      )
      .subscribe( producto => {
          this.producto = producto;
          console.log(producto);
      } ) */

  }

}
