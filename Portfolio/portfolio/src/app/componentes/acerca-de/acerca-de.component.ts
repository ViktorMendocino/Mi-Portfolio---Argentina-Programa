import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutMe } from 'src/app/entidades/aboutMe';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  aboutMe:any;
  usuarioAutenticado:boolean=true;//atencion!! al comienzo siempre debe estar en false
  form:FormGroup;

  constructor(private miServicio:AcercaDeService , private miFormBuilder:FormBuilder ) {
    this.form=this.miFormBuilder.group({
      // se agregan las validaciones(form control) de cada campo de formulario por intermedio de la clase Validators
      name:['',[Validators .required,Validators.minLength(10)]],
   })
   }
   get name()
   {
     return this.form.get("name");
   }



   ngOnInit(): void {
    this.miServicio.obtenerDatosAboutMe(1).subscribe(data => {console.log(data);
      this.aboutMe = data;
    })
  }


   guardarDatosAboutMe(){
    if (this.form.valid)

    {
      let name=this.form.get("name")?.value;

      let AboutMeEditar=new AboutMe(this.aboutMe.id,name);
      this.miServicio.editarDatosAboutMe(AboutMeEditar).subscribe({next: (d) => {
        this.aboutMe=AboutMeEditar;
        //usando DOM podemos acceder al boton que le asignamos el id="cerraModalAcercaDe" y lo obligamos a hacer click para que se cierre la venta modal
        document.getElementById("cerraModalAcercaDe")?.click();
      },
        error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
      })
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
  mostrarDatosAboutMe()
  {
    this.form.get("name")?.setValue(this.aboutMe.name);

  }


}
