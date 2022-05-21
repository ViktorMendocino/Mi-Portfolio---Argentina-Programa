import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { Knowledge } from '../entidades/knowledge';

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {
  direccion:String = 'https://victormirandaportfolio.herokuapp.com'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosKnowledge():Observable<any> {
    return this.http.get(this.direccion+'/listaConocimiento')
  }
  modificarDatosconocimientos(knowledge:Knowledge):Observable<any> {
    return this.http.put(this.direccion+"/modificarConocimiento",knowledge)}

  eliminarConocimientoPorId(id:number):Observable<any> {
      return this.http.delete(this.direccion+"/eliminarCono/"+id)}

  crearDatosConocimiento(knowledge:Knowledge):Observable<any> {
       return this.http.post(this.direccion+"/crearConocimiento",knowledge)}



}
