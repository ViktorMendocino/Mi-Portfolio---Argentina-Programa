import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Experience } from '../entidades/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  direccion:String = 'http://localhost:8080'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosExp():Observable<any> {
    return this.http.get(this.direccion+'/solicitarExp')
  }
  editarDatosExp(experience:Experience):Observable<any>{

    return this.http.put(this.direccion+"/modificarExp",experience);
    }
   eliminarExperienciaPorId(id:number):Observable<any> {
    return this.http.delete(this.direccion+"/eliminarExp/"+id)}

    crearDatosExperiencia(experience:Experience):Observable<any> {
     return this.http.post(this.direccion+"/crearExp",experience)}







}
