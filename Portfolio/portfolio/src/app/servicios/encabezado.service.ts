import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  direccion:String = 'https://victormirandaportfolio.herokuapp.com'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }

obtenerDatosPersona(id:number):Observable<any> {
  return this.http.get(this.direccion+"/buscarPersona/"+id)
}

editarDatosPersona(persona:Persona):Observable<any>{

return this.http.put(this.direccion+"/modificarPersona",persona);
}

}
