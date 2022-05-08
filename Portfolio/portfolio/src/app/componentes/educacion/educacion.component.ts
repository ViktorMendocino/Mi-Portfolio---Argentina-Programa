import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/entidades/education';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
form:FormGroup;

  education:any;
  usuarioAutenticado:boolean=false;

  constructor(private miServicio:EducacionService, private miFormBuilder:FormBuilder,private loginServicio:LoginService) {
  this.form = this.miFormBuilder.group({
    id:[''],
    school:['',[Validators.required,Validators.minLength(5)]],
    title:['',[Validators.required,Validators.minLength(5)]],
    career:['',[Validators.required,Validators.minLength(5)]],
    //averiguar expersiones regulares Validators.pattern
    img:['https://',[Validators.required,Validators.pattern('https.+')]],
    start:['',[Validators.required,Validators.minLength(4)]],
    end:['',[Validators.required,Validators.minLength(4)]]
  })
  }
  get school()
  {
    return this.form.get("school");
  }
  get title()
  {
    return this.form.get("title");
  }
  get career()
  {
    return this.form.get("career");
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
    this.miServicio.obtenerDatosEducacion().subscribe(data => {console.log(data);
      this.education = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})

  }

  mostrarDatosEducation(id:number){

    this.form.get("school")?.setValue(this.education[id-1].school)
    this.form.get("title")?.setValue(this.education[id-1].title)
    this.form.get("career")?.setValue(this.education[id-1].career);
    this.form.get("img")?.setValue(this.education[id-1].img);
    this.form.get("start")?.setValue(this.education[id-1].start);
    this.form.get("end")?.setValue(this.education[id-1].end);
    this.form.get("id")?.setValue(this.education[id-1].id);
  }








guardarDatosEducation(education:Education){ if (this.form.valid)
  //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
 {
   let school=this.form.get("school")?.value;
   let title=this.form.get("title")?.value;
   let career=this.form.get("career")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=this.form.get("id")?.value;


   let educationEditar=new Education(id,school,title,img,start,end,career);
   this.miServicio.modificarDatosEducacion(educationEditar).subscribe({next: (d) => {
     this.education=educationEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraModalEncabezado" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraeducationModal")?.click();
   },
     error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
   })
 }
 else{
   //alert("Hay errores");
   this.form.markAllAsTouched();
 }

}

eliminarEducacion(id:number){

  this.miServicio.eliminarEducacionPorId(id).subscribe(data => {console.log(data)})

  alert("El registro se ha eliminado.")
}


crearEducation(education:Education){ if (this.form.valid)
  //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
 {
   let school=this.form.get("school")?.value;
   let title=this.form.get("title")?.value;
   let career=this.form.get("career")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=this.form.get("id")?.value;


   let educationEditar=new Education(this.education.id,school,title,img,start,end,career);
   this.miServicio.crearDatosEducacion(educationEditar).subscribe({next: (d) => {
     this.education=educationEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraModalEncabezado" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraeducationModal2")?.click();
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



