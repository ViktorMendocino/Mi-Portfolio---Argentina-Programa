import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyect } from 'src/app/entidades/proyect';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  form:FormGroup;
  proyect:any;
  usuarioAutenticado:boolean=false;

  constructor(private miServicio:ProyectosService , private miFormBuilder:FormBuilder,private loginServicio:LoginService) {
    this.form = this.miFormBuilder.group({
      id:[''],
      name:['',[Validators.required,Validators.minLength(5)]],
      title:['',[Validators.required,Validators.minLength(5)]],
      repo:['https://',[Validators.required,Validators.pattern('https.+')]],
      //averiguar expersiones regulares Validators.pattern
      img:['https://',[Validators.required,Validators.pattern('https.+')]],
      start:['',[Validators.required,Validators.minLength(4)]],
      end:['',[Validators.required,Validators.minLength(4)]]
    })

   }

   get name()
  {
    return this.form.get("name");
  }
  get title()
  {
    return this.form.get("title");
  }
  get repo()
  {
    return this.form.get("repo");
  }

  get img()
  {
    return this.form.get("img");
  }
  get start()
  {
    return this.form.get("start");
  }
  get end()
  {
    return this.form.get("end");
  }
  get id()
  {
    return this.form.get("id");
  }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyectos().subscribe(data => {console.log(data);
      this.proyect = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})
  }

  mostrarDatosproyecto(id:number){

    this.form.get("name")?.setValue(this.proyect[id-1].name)
    this.form.get("title")?.setValue(this.proyect[id-1].title)
    this.form.get("repo")?.setValue(this.proyect[id-1].repo);
    this.form.get("img")?.setValue(this.proyect[id-1].img);
    this.form.get("start")?.setValue(this.proyect[id-1].start);
    this.form.get("end")?.setValue(this.proyect[id-1].end);
    this.form.get("id")?.setValue(this.proyect[id-1].id);
  }

guardarDatosproyecto(proyect:Proyect){ if (this.form.valid)

 {
   let name=this.form.get("name")?.value;
   let title=this.form.get("title")?.value;
   let repo=this.form.get("repo")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=this.form.get("id")?.value;


   let proyectEditar=new Proyect(id,name,title,img,start,end,repo);
   this.miServicio.editarDatosProyecto(proyectEditar).subscribe({next: (d) => {
     this.proyect=proyectEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraModalproyecto" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraproyectModal")?.click();
   },
     error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
   })
 }
 else{
   //alert("Hay errores");
   this.form.markAllAsTouched();
 }

}

eliminarProyecto(id:number){

  this.miServicio.eliminarProyectosPorId(id).subscribe(data => {console.log(data)})

  alert("El registro se ha eliminado.")
}


crearDatosProyecto(proyect:Proyect){ if (this.form.valid)

 {
   let name=this.form.get("name")?.value;
   let title=this.form.get("title")?.value;
   let repo=this.form.get("repo")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=this.form.get("id")?.value;


   let proyectEditar=new Proyect(this.proyect.id,name,title,img,start,end,repo);
   this.miServicio.crearDatosProyectos(proyectEditar).subscribe({next: (d) => {
     this.proyect=proyectEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraModalProyecto" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraproyectModal2")?.click();
   },
     error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
   })
 }
 else{
   //alert("Hay errores");
   this.form.markAllAsTouched();
 }

}



}
