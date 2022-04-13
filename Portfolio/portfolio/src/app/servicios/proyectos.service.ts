import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }


obtenerDatosProyectos():Observable<any> {
  return this.http.get('./assets/data/proyectos.json')

}

}
