import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : number = new Date().getFullYear(); //obtiene el año de manera local

  constructor( public _servicio : InfoPaginaService) { }

  ngOnInit(): void {
  }

}
