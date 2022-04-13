import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosPersona():Observable<any> {
    return this.http.get('./assets/data/persona.json')
  }
}
