import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardAndSoftService {

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosHarSkills():Observable<any> {
    return this.http.get('./assets/data/hardAndSoft.json')
  }
  obtenerDatosSoftSkills():Observable<any> {
    return this.http.get('./assets/data/hardAndSoft.json')
  }
}
