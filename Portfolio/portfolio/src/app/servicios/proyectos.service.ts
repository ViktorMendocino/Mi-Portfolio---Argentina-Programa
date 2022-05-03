import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../entidades/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  direccion:String = 'http://localhost:8080'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }


obtenerDatosProyectos():Observable<any> {
  return this.http.get(this.direccion+"/listaProyecto")

}
editarDatosProyecto(proyect:Proyect):Observable<any>{

  return this.http.put(this.direccion+"/modificarProyecto",proyect);
  }

  eliminarProyectosPorId(id:number):Observable<any> {
    return this.http.delete(this.direccion+"/eliminarProyecto/"+id)}

    crearDatosProyectos(proyect:Proyect):Observable<any> {
     return this.http.post(this.direccion+"/crearProyecto",proyect)}



}
