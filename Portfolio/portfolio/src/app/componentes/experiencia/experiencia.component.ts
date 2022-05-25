import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/entidades/experience';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  form:FormGroup;
  listExperience!:Experience[];
  experience:any;
  usuarioAutenticado:boolean=false;
  visualizarId:boolean=false;
  constructor(private miServicio:ExperienciaService , private miFormBuilder:FormBuilder,private loginServicio:LoginService) {
    this.form = this.miFormBuilder.group({
      id:[''],
      business:['',[Validators.required,Validators.minLength(5)]],
      position:['',[Validators.required,Validators.minLength(5)]],
      tasksDeveloped:['',[Validators.required,Validators.minLength(5)]],
      //averiguar expersiones regulares Validators.pattern
      img:['https://',[Validators.required,Validators.pattern('https.+')]],
      start:['',[Validators.required,Validators.minLength(4)]],
      end:['',[Validators.required,Validators.minLength(4)]]
    })
  }
  get business()
  {
    return this.form.get("business");
  }
  get position()
  {
    return this.form.get("position");
  }
  get tasksDeveloped()
  {
    return this.form.get("tasksDeveloped");
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
    this.miServicio.obtenerDatosExp().subscribe(data => {console.log(data);
      this.listExperience = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})
  }



  mostrarDatosExperiencia(item:Experience){

    this.form.get("business")?.setValue(this.listExperience[this.listExperience.indexOf(item)].business)
    this.form.get("position")?.setValue(this.listExperience[this.listExperience.indexOf(item)].position)
    this.form.get("tasksDeveloped")?.setValue(this.listExperience[this.listExperience.indexOf(item)].tasksDeveloped);
    this.form.get("img")?.setValue(this.listExperience[this.listExperience.indexOf(item)].img);
    this.form.get("start")?.setValue(this.listExperience[this.listExperience.indexOf(item)].start);
    this.form.get("end")?.setValue(this.listExperience[this.listExperience.indexOf(item)].end);
    this.form.get("id")?.setValue(this.listExperience[this.listExperience.indexOf(item)].id);
  }


  
guardarDatosExperiencia(){ if (this.form.valid)

 {
   let business=this.form.get("business")?.value;
   let position=this.form.get("position")?.value;
   let tasksDeveloped=this.form.get("tasksDeveloped")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=this.form.get("id")?.value;

   let experienceEditar=new Experience(id,business,position,img,start,end,tasksDeveloped);
   this.miServicio.editarDatosExp(experienceEditar).subscribe({next: (d) => {
    this.listExperience.splice(this.listExperience.findIndex((element) =>element.id===this.form.get("id")?.value),1,experienceEditar);
      //usando DOM podemos acceder al boton que le asignamos el id="cerraexperienceModal" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraexperienceModal")?.click();
     alert("El registro se ha modificado.")
   },
     error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
   })
 }
 else{
   //alert("Hay errores");
   this.form.markAllAsTouched();
 }

}

eliminarExperiencia(item:number){
  console.log(item);
  this.miServicio.eliminarExperienciaPorId(item).subscribe(data => {
   this.listExperience.splice(this.listExperience.findIndex((element) =>element.id===item),1);
  })

  alert("El registro se ha eliminado.")
}


crearDatosExperiencia(){ if (this.form.valid)
  //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
 {
   let business=this.form.get("business")?.value;
   let position=this.form.get("position")?.value;
   let tasksDeveloped=this.form.get("tasksDeveloped")?.value;
   let img=this.form.get("img")?.value;
   let start=this.form.get("start")?.value;
   let end=this.form.get("end")?.value;
   let id=(this.listExperience[this.listExperience.length - 1].id)+1


   let experienceEditar=new Experience(id,business,position,img,start,end,tasksDeveloped);
   this.miServicio.crearDatosExperiencia(experienceEditar).subscribe({next: (d) => {
     this.listExperience.push(experienceEditar);
     //usando DOM podemos acceder al boton que le asignamos el id="cerraexperienceModal2" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerraexperienceModal2")?.click();
     alert("El registro se ha creado.")
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
