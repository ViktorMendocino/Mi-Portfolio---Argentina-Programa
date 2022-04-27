import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { HardSkills } from '../entidades/HardSkills';

@Injectable({
  providedIn: 'root'
})
export class HardAndSoftService {
  direccion:String = 'http://localhost:8080'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosHardSkills():Observable<any> {
    return this.http.get(this.direccion+"/solicitarHskills")
  }
  obtenerDatosSoftSkills():Observable<any> {
    return this.http.get(this.direccion+"/solicitarSoft")
  }
  editarDatosHarSkills(hardSkills:HardSkills):Observable<any>{

    return this.http.put(this.direccion+"/modificarHSkills",hardSkills);
    }
}
