import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : number = new Date().getFullYear(); //obtiene el año de manera local
  info : InfoPagina = {};

  constructor( private _servicio : InfoPaginaService) { }

  ngOnInit(): void {

    this._servicio.cargarInfo()
    .subscribe( resp => {
        this.info = resp;
    })

  }

}
