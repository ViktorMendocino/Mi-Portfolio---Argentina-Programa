import { EventEmitter, Injectable ,Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../entidades/login';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() disparadordeLogin:EventEmitter<any> = new EventEmitter();
  direccion:String = 'https://victormirandaportfolio.herokuapp.com';
  constructor(private http: HttpClient) {
   }

   verficarUsuario(login:Login):Observable<any> {
     return this.http.post(this.direccion +"/Login",login);

   }



}
