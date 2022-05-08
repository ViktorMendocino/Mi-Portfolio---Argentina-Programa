import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Login } from 'src/app/entidades/login';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form:FormGroup;
  login:any;

  usuarioAutenticado:boolean= false;

  constructor(private miServicio:LoginService  ,private miFormBuilder:FormBuilder) {
    this.form = this.miFormBuilder.group({
      usuario:['',[Validators.required,Validators.minLength(5)]],
      pwd:['',[Validators.required,Validators.minLength(2)]]
    })
  }
    get usuario()
    {
      return this.form.get("usuario");
    }

    get pwd()
    {
      return this.form.get("pwd");
    }



  ngOnInit(): void {
  }

  //metodos


  verificarLogin(){
    if (this.form.valid){
   let user = this.form.get("usuario")?.value;
   let pwd = this.form.get("pwd")?.value;
   let id= 1;
   let Newlogin=new Login(id,user,pwd);
    this.miServicio.verficarUsuario(Newlogin).subscribe(data => {this.usuarioAutenticado=data;
    if(data==true){
      alert("Se ha logeado correctamente.")
      document.getElementById("cerrarCanvas")?.click();
      console.log(this.usuarioAutenticado);
      this.agregarLogin();
    }
    else{
      alert("Usuario inexistente.")
      console.log(this.usuarioAutenticado);
     }
    })}
  else{
    //alert("Hay errores");
    this.form.markAllAsTouched();
   }
  }

  agregarLogin(){
this.miServicio.disparadordeLogin.emit({
data:this.usuarioAutenticado
})

 }


}
