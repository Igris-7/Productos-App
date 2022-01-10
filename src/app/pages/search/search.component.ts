import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor( private route : ActivatedRoute,
               public productoService : ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametro => {
        this.productoService.buscarProducto( parametro['termino'] );
        console.log(parametro['termino']);
      });

  }

}
