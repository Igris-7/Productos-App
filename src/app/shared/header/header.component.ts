import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info : InfoPagina = {};

  constructor( private _servicio : InfoPaginaService) { }

  ngOnInit(): void {

    this._servicio.cargarInfo()
    .subscribe( resp => {
        this.info = resp;
      }
    )

  }

}
