import { Component, OnInit } from '@angular/core';
import { HardAndSoftService } from 'src/app/servicios/hard-and-soft.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkills } from 'src/app/entidades/HardSkills';
import { SoftSkills } from 'src/app/entidades/softSkills';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})
export class HardAndSoftComponent implements OnInit {
  form:FormGroup;
  ListHardSkills!:HardSkills[];
  ListSoftSkills!:SoftSkills[];
  hardSkills:any;
  softSkills:any;
  usuarioAutenticado:boolean=false;
  visualizarId:boolean=false;

  constructor(private miServicio:HardAndSoftService, private miFormBuilder:FormBuilder,private loginServicio:LoginService) {
    this.form = this.miFormBuilder.group({
      id:[''],
      name:['',[Validators.required,Validators.minLength(5)]],
      value:['',[Validators.required,Validators.minLength(2)]]
    })
  }
   //getters
   get value()
   {
     return this.form.get("value");
   }
   get id()
   {
     return this.form.get("id");
   }

   get name()
   {
     return this.form.get("name");
   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosHardSkills().subscribe(data => {console.log(data);
      this.ListHardSkills = data;
    })
    this.miServicio.obtenerDatosSoftSkills().subscribe(data => {console.log(data);
      this.ListSoftSkills = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})
  }
//Metodos Hard Skills
mostrarDatoshardSkills(item:HardSkills){

  this.form.get("name")?.setValue(this.ListHardSkills[this.ListHardSkills.indexOf(item)].name)

  this.form.get("id")?.setValue(this.ListHardSkills[this.ListHardSkills.indexOf(item)].id);

  this.form.get("value")?.setValue(this.ListHardSkills[this.ListHardSkills.indexOf(item)].value);
}



guardarDatoshardSkillss(){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;

 let id=this.form.get("id")?.value;

 let value=this.form.get("value")?.value;

 let hardSkillsEditar=new HardSkills(id,name,value);
 this.miServicio.editarDatosHarSkills(hardSkillsEditar).subscribe({next: (d) => {
  this.ListHardSkills.splice(this.ListHardSkills.findIndex((element) =>element.id===this.form.get("id")?.value),1,hardSkillsEditar);
   //usando DOM podemos acceder al boton que le asignamos el id="cerrarhardSkillsModal" y lo obligamos a hacer click para que se cierre la venta modal
   document.getElementById("cerrarhardSkillsModal")?.click();
  
 },
   error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
 })
}
else{
 //alert("Hay errores");
 this.form.markAllAsTouched();
}

}

eliminarHardSkills(item:number){

this.miServicio.eliminarHardPorId(item).subscribe(data => {

this.ListHardSkills.splice(this.ListHardSkills.findIndex((element) =>element.id===item),1);
})

alert("El registro se ha eliminado.")
}


crearHardSkills(){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;
 let id=(this.ListHardSkills[this.ListHardSkills.length - 1].id)+1
 let value=this.form.get("value")?.value;

 let hardSkillsEditar=new HardSkills(id,name , value);
 this.miServicio.editarDatosHarSkills(hardSkillsEditar).subscribe({next: (d) => {
 this.ListHardSkills.push(hardSkillsEditar);
   //usando DOM podemos acceder al boton que le asignamos el id="cerrahardSkillsModal2" y lo obligamos a hacer click para que se cierre la venta modal
   document.getElementById("CerrarhardSkillsModal2")?.click();

 },
   error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
 })
}
else{
 //alert("Hay errores");
 this.form.markAllAsTouched();
}

}



//Metodos Soft Skills
mostrarDatosSoftSkills(item:SoftSkills){

  this.form.get("name")?.setValue(this.ListSoftSkills[this.ListSoftSkills.indexOf(item)].name)

  this.form.get("id")?.setValue(this.ListSoftSkills[this.ListSoftSkills.indexOf(item)].id);

  this.form.get("value")?.setValue(this.ListSoftSkills[this.ListSoftSkills.indexOf(item)].value);
}



guardarDatosSoftSkills(){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;

 let id=this.form.get("id")?.value;

 let value=this.form.get("value")?.value;

 let softSkillsEditar=new SoftSkills(id,name,value);
 this.miServicio.editarDatosSoftSkills(softSkillsEditar).subscribe({next: (d) => {
this.ListSoftSkills.splice(this.ListSoftSkills.findIndex((element) =>element.id===this.form.get("id")?.value),1,softSkillsEditar);
   //usando DOM podemos acceder al boton que le asignamos el id="cerrasoftSkillsModa" y lo obligamos a hacer click para que se cierre la venta modal
   document.getElementById("cerrarsoftSkillsModal")?.click();

 },
   error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
 })
}
else{
 //alert("Hay errores");
 this.form.markAllAsTouched();
}

}

eliminarSoftSkills(item:number){

this.miServicio.eliminarSoftPorId(item).subscribe(data => {
  this.ListSoftSkills.splice(this.ListSoftSkills.findIndex((element) =>element.id===item),1);
})

alert("El registro se ha eliminado.")
}


crearSoftSkills(){ if (this.form.valid)

{
 let name=this.form.get("name")?.value;
 let id=(this.ListSoftSkills[this.ListSoftSkills.length - 1].id)+1
 let value=this.form.get("value")?.value;

 let softSkillsEditar=new SoftSkills(id,name, value);
 this.miServicio.editarDatosSoftSkills(softSkillsEditar).subscribe({next: (d) => {
this.ListSoftSkills.push(softSkillsEditar);
   //usando DOM podemos acceder al boton que le asignamos el id="cerraSoftSkillsModal2" y lo obligamos a hacer click para que se cierre la venta modal
   document.getElementById("CerrarsoftSkillsModal2")?.click();

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
