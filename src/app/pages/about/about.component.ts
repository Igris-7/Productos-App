import { Component, OnInit } from '@angular/core';
import { EquipoTrabajo } from 'src/app/interfaces/equipo.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  equipoTrabajo : EquipoTrabajo[] = [];

  constructor(private equipoServicio : InfoPaginaService) { }

  ngOnInit(): void {
    this.equipoServicio.cargarEquipo().subscribe(
      resp => {
        this.equipoTrabajo = resp;
      }
    ) 
  }
}
