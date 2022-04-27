import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;//atencion!! al comienzo siempre debe estar en false
  form:FormGroup;
  //creamos un servicio para encabezado y tambien el Formbuilder es un servicio , al ser ambos servicios se agregan como argumentos en el constructor
  constructor(private miServicio:EncabezadoService , private miFormBuilder:FormBuilder) {
    // hay que crear una instacia de nuestro objeto  "form:FormGroup;" ,por cada campo de formulario
  this.form=this.miFormBuilder.group({
    // se agregan las validaciones(form control) de cada campo de formulario por intermedio de la clase Validators
  fullName:['',[Validators.required,Validators.minLength(5)]],
  position:['',[Validators.required,Validators.minLength(5)]],
  ubication:['',[Validators.required,Validators.minLength(5)]],
  //averiguar expersiones regulares Validators.pattern
  url:['https://',[Validators.required,Validators.pattern('https.+')]],
  background:['https://',[Validators.required,Validators.pattern('https.+')]]
  })
 }
//como el atributo fullName esta dentro de el objeto form , no me lo toma el front por lo que debo usar el metodo get para obtener el child del form
  get fullName()
  {
    return this.form.get("fullName");
  }
  get position()
  {
    return this.form.get("position");
  }
  get ubication()
  {
    return this.form.get("ubication");
  }

  get url()
  {
    return this.form.get("url");
  }
  get background()
  {
    return this.form.get("background");
  }



//se agrega el metodo obtener datos por intermedio de data binding con un servicio asincrono que hay que suscribir
  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona(1).subscribe(data => {console.log(data);
      this.persona = data;
    })
  }
  guardarDatosEncabezado(){
    if (this.form.valid)
     //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
   //creado en la carpeta entidades para mas adelante enviarlos a la base de datos
    {
      let fullName=this.form.get("fullName")?.value;
      let position=this.form.get("position")?.value;
      let ubication=this.form.get("ubication")?.value;
      let url=this.form.get("url")?.value;
      let background=this.form.get("background")?.value;

      let personaEditar=new Persona(this.persona.id,fullName,position,ubication,url,background);
      this.miServicio.editarDatosPersona(personaEditar).subscribe({next: (d) => {
        this.persona=personaEditar;
        //usando DOM podemos acceder al boton que le asignamos el id="cerraModalEncabezado" y lo obligamos a hacer click para que se cierre la venta modal
        document.getElementById("cerraModalEncabezado")?.click();
      },
        error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
      })
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }

  //mostrarDatosEncabezado lo que hace es mostrar los datos provenientes de la base de datos cuando abro el formulario para modificarlo
  mostrarDatosEncabezado()
  {
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("url")?.setValue(this.persona.url);
    this.form.get("background")?.setValue(this.persona.background);
  }

  /*guardarDatosEncabezado(){
    if(this.form.valid){
   //con el siguiente codigo vamos a guardar los datos del formulario en un objeto personaEditar para luego guardarlos en nuestro objeto persona
   //creado en la carpeta entidades para mas adelante enviarlos a la base de datos


    alert("enviar los datos al servidor");
    //se coloca el codigo siguiente para reiniciar los datos del formulario
    this.form.reset();
    //usando DOM podemos acceder al boton que le asignamos el id="cerraModalEncabezado" y lo obligamos a hacer click para que se cierre la venta modal
    document.getElementById("cerraModalEncabezado")?.click();
    }
    else{
      //alert("Hay errores")
      this.form.markAllAsTouched();
    }
  }*/
}
