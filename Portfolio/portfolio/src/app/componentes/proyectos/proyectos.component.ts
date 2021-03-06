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
  ListProyect!: Proyect[];
  proyect:any;
  usuarioAutenticado:boolean=false;
  visualizarId:boolean=false;
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
      this.ListProyect = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})
  }

  mostrarDatosproyecto(item:Proyect){

    this.form.get("name")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].name)
    this.form.get("title")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].title)
    this.form.get("repo")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].repo);
    this.form.get("img")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].img);
    this.form.get("start")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].start);
    this.form.get("end")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].end);
    this.form.get("id")?.setValue(this.ListProyect[this.ListProyect.indexOf(item)].id);
  }

guardarDatosproyecto(){ if (this.form.valid)

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
    this.ListProyect.splice(this.ListProyect.findIndex((element) =>element.id===this.form.get("id")?.value),1,proyectEditar);
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

eliminarProyecto(item:number){

  this.miServicio.eliminarProyectosPorId(item).subscribe(data => {
    this.ListProyect.splice(this.ListProyect.findIndex((element) =>element.id===item),1);
  })

  alert("El registro se ha eliminado.")
}


crearDatosProyecto(){ if (this.form.valid)

 {
   let name=this.form.get("name")?.value;
   let title=this.form.get("title")?.value;
   let repo=this.form.get("repo")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=(this.ListProyect[this.ListProyect.length - 1].id)+1


   let proyectEditar=new Proyect(this.proyect.id,name,title,img,start,end,repo);
   this.miServicio.crearDatosProyectos(proyectEditar).subscribe({next: (d) => {
    this.ListProyect.push(proyectEditar);
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
