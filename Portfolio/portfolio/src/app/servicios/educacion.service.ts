import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Education } from '../entidades/education';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  direccion:String = 'http://localhost:8080'

  constructor(private http: HttpClient ) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosEducacion():Observable<any> {
    return this.http.get(this.direccion+"/listaEducation")
  }
  obtenerDatosEducacionPorId(id:number):Observable<any> {
    return this.http.get(this.direccion+"/buscarEducation/"+id)
  }

  modificarDatosEducacion(education:Education):Observable<any> {
    return this.http.put(this.direccion+"/modificarEdu",education)}


}
