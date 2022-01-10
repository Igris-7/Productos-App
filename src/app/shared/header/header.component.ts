import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info : InfoPagina = {};

  constructor( private _servicio : InfoPaginaService,
               private router : Router) { }

  ngOnInit(): void {

    this._servicio.cargarInfo()
    .subscribe( resp => {
        this.info = resp;
      }
    )
  }

  buscarProducto(termino : string){
    console.log(termino);

    if(termino.length < 1 ){
      return;
    }

    this.router.navigateByUrl(`/search/${termino}`);
    //this.router.navigate(['/search',termino]);

  }

}
