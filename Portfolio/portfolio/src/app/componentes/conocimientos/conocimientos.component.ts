import { Component, OnInit } from '@angular/core';
import { ConocimientosService } from 'src/app/servicios/conocimientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Knowledge } from 'src/app/entidades/knowledge';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  form:FormGroup;
  knowledge:any;
  usuarioAutenticado:boolean=false;
  visualizarId:boolean=false;
  constructor(private miServicio:ConocimientosService, private miFormBuilder:FormBuilder,private loginServicio:LoginService ) {

    this.form = this.miFormBuilder.group({
      id:[''],
      name:['',[Validators.required,Validators.minLength(5)]],
    })
  }

   //getters
    get name()
    {
      return this.form.get("name");
    }
    get id()
    {
      return this.form.get("id");
    }


  ngOnInit(): void {
    this.miServicio.obtenerDatosKnowledge().subscribe(data => {console.log(data);
      this.knowledge = data;
    })
    this.loginServicio.disparadordeLogin.subscribe(data => {this.usuarioAutenticado=data;})
  }

  mostrarDatosConocimiento(id:number){

    this.form.get("name")?.setValue(this.knowledge[id-1].name)

    this.form.get("id")?.setValue(this.knowledge[id-1].id);
  }



  guardarDatosConocimientos(knowledge:Knowledge){ if (this.form.valid)
  //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
 {
   let name=this.form.get("name")?.value;

   let id=this.form.get("id")?.value;


   let conocimientoEditar=new Knowledge(id,name);
   this.miServicio.modificarDatosconocimientos(conocimientoEditar).subscribe({next: (d) => {
     this.knowledge=conocimientoEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraconocimientoModa" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("cerrarconocimientosModal")?.click();
   },
     error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
   })
 }
 else{
   //alert("Hay errores");
   this.form.markAllAsTouched();
 }

}

eliminarConocimientos(id:number){

  this.miServicio.eliminarConocimientoPorId(id).subscribe(data => {console.log(data)})

  alert("El registro se ha eliminado.")
}


crearConocimiento(knowledge:Knowledge){ if (this.form.valid)
  //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
//creado en la carpeta entidades para mas adelante enviarlos a la base de datos
 {
   let name=this.form.get("name")?.value;
   let id=this.form.get("id")?.value;

   let conocimientoEditar=new Knowledge(this.knowledge.id,name);
   this.miServicio.crearDatosConocimiento(conocimientoEditar).subscribe({next: (d) => {
     this.knowledge=conocimientoEditar;
     //usando DOM podemos acceder al boton que le asignamos el id="cerraconocimientoModal2" y lo obligamos a hacer click para que se cierre la venta modal
     document.getElementById("CerrarconocimientoModal2")?.click();
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
