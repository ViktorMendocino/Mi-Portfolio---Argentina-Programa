import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { AboutMe } from '../entidades/aboutMe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  direccion:String = 'https://victormirandaportfolio.herokuapp.com'

  constructor(private http: HttpClient) {
    console.log("el servicio esta corriendo");
  }
  obtenerDatosAboutMe(id:number):Observable<any> {
    return this.http.get(this.direccion+"/buscarAcercaDe/"+id)
  }

  editarDatosAboutMe(aboutMe:AboutMe ):Observable<any>{

    return this.http.put(this.direccion+"/modificarAcerca",aboutMe);
    }

}
