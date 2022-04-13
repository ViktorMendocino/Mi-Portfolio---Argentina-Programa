import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosEducacion():Observable<any> {
    return this.http.get('./assets/data/educacion.json')
  }
}
