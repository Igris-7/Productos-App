import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos : Productos[] = [];
  cargado : boolean = true;

  constructor( private productosService : ProductosService ) { }

  ngOnInit(): void {

    this.productosService.cargarProductos()
      .subscribe( (resp) => {
        this.productos = resp;
        this.cargado = false;
      });

  }

}
