import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Education } from '../entidades/education';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  direccion:String = 'https://victormirandaportfolio.herokuapp.com'

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

    eliminarEducacionPorId(id:number):Observable<any> {
      return this.http.delete(this.direccion+"/eliminarEdu/"+id)}

      crearDatosEducacion(education:Education):Observable<any> {
        return this.http.post(this.direccion+"/crearEdu",education)}

}
