import { Component, OnInit } from '@angular/core';
import { HardAndSoftService } from 'src/app/servicios/hard-and-soft.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkills } from 'src/app/entidades/HardSkills';
import { SoftSkills } from 'src/app/entidades/softSkills';

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})
export class HardAndSoftComponent implements OnInit {
  form:FormGroup;
  hardSkills:any;
  softSkills:any;
  visibilidadDeFormulario:boolean = false;


  constructor(private miServicio:HardAndSoftService, private miFormBuilder:FormBuilder) {
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
      this.hardSkills = data;
    })
    this.miServicio.obtenerDatosSoftSkills().subscribe(data => {console.log(data);
      this.softSkills = data;
    })
  }
//Metodos Hard Skills
mostrarDatoshardSkills(id:number){

  this.form.get("name")?.setValue(this.hardSkills[id-1].name)

  this.form.get("id")?.setValue(this.hardSkills[id-1].id);

  this.form.get("value")?.setValue(this.hardSkills[id-1].value);
}



guardarDatoshardSkillss(hardSkills:HardSkills){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;

 let id=this.form.get("id")?.value;

 let value=this.form.get("value")?.value;

 let hardSkillsEditar=new HardSkills(id,name,value);
 this.miServicio.editarDatosHarSkills(hardSkillsEditar).subscribe({next: (d) => {
   this.hardSkills=hardSkillsEditar;
   //usando DOM podemos acceder al boton que le asignamos el id="cerrahardSkillsModa" y lo obligamos a hacer click para que se cierre la venta modal
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

eliminarHardSkills(id:number){

this.miServicio.eliminarHardPorId(id).subscribe(data => {console.log(data)})

alert("El registro se ha eliminado.")
}


crearHardSkills(hardSkills:HardSkills){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;
 let id=this.form.get("id")?.value;
 let value=this.form.get("value")?.value;

 let hardSkillsEditar=new HardSkills(this.hardSkills.id,name , value);
 this.miServicio.editarDatosHarSkills(hardSkillsEditar).subscribe({next: (d) => {
   this.hardSkills=hardSkillsEditar;
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
mostrarDatosSoftSkills(id:number){

  this.form.get("name")?.setValue(this.softSkills[id-1].name)

  this.form.get("id")?.setValue(this.softSkills[id-1].id);

  this.form.get("value")?.setValue(this.softSkills[id-1].value);
}



guardarDatosSoftSkills(softSkills:SoftSkills){ if (this.form.valid)
//con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
{
 let name=this.form.get("name")?.value;

 let id=this.form.get("id")?.value;

 let value=this.form.get("value")?.value;

 let softSkillsEditar=new SoftSkills(id,name,value);
 this.miServicio.editarDatosSoftSkills(softSkillsEditar).subscribe({next: (d) => {
   this.softSkills=softSkillsEditar;
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

eliminarSoftSkills(id:number){

this.miServicio.eliminarSoftPorId(id).subscribe(data => {console.log(data)})

alert("El registro se ha eliminado.")
}


crearSoftSkills(softSkills:SoftSkills){ if (this.form.valid)

{
 let name=this.form.get("name")?.value;
 let id=this.form.get("id")?.value;
 let value=this.form.get("value")?.value;

 let softSkillsEditar=new SoftSkills(this.softSkills.id,name, value);
 this.miServicio.editarDatosSoftSkills(softSkillsEditar).subscribe({next: (d) => {
   this.softSkills=softSkillsEditar;
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
