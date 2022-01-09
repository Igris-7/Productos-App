import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { EquipoTrabajo } from '../interfaces/equipo.interface';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private url : string = environment.baseUrl;

  constructor( private http: HttpClient) {
  }

    cargarInfo(): Observable<InfoPagina>{
    //Leer el JSON
    return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  }

    cargarEquipo(): Observable<EquipoTrabajo[]>{
    return this.http.get<EquipoTrabajo[]>(`${this.url}/equipo.json`);
    }
  }

