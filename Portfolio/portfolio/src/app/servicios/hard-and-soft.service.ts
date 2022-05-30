import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { HardSkills } from '../entidades/HardSkills';
import { SoftSkills } from '../entidades/softSkills';

@Injectable({
  providedIn: 'root'
})
export class HardAndSoftService {
  direccion:String = 'https://victormirandaportfolio.herokuapp.com'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }

  // servicios HardSkills
  obtenerDatosHardSkills():Observable<any> {
    return this.http.get(this.direccion+"/solicitarHskills");
  }


  editarDatosHarSkills(hardSkills:HardSkills):Observable<any>{

    return this.http.put(this.direccion+"/modificarHSkills",hardSkills);
    }

    eliminarHardPorId(id:number):Observable<any> {
      return this.http.delete(this.direccion+"/eliminarHskills/"+id)}

    crearHardSkills(softSkills:SoftSkills):Observable<any> {
       return this.http.post(this.direccion+"/crearHSkills",softSkills)}


     // servicios softSkills

    obtenerDatosSoftSkills():Observable<any> {
      return this.http.get(this.direccion+"/solicitarSoft")
    }


   editarDatosSoftSkills(softSkills:SoftSkills):Observable<any>{

      return this.http.put(this.direccion+"/modificarSoft",softSkills);
      }


      eliminarSoftPorId(id:number):Observable<any> {
        return this.http.delete(this.direccion+"/eliminarSoft/"+id)}

      crearSoftSkills(softSkills:SoftSkills):Observable<any> {
         return this.http.post(this.direccion+"/crearSoft",softSkills)}

}
