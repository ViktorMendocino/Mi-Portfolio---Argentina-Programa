import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/entidades/education';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
form:FormGroup;

  education:any;
  educacion:any;

  constructor(private miServicio:EducacionService, private miFormBuilder:FormBuilder) {
  this.form = this.miFormBuilder.group({
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


  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data => {console.log(data);
      this.education = data;
    })


  }

  mostrarDatosEducation(id:number){

   this.miServicio.obtenerDatosEducacionPorId(id).subscribe(data => {console.log(data);
      this.educacion = data; })
    this.form.get("school")?.setValue(this.educacion.school)
    this.form.get("title")?.setValue(this.educacion.title)
    this.form.get("career")?.setValue(this.educacion.career);
    this.form.get("img")?.setValue(this.educacion.img);
    this.form.get("start")?.setValue(this.educacion.start);
    this.form.get("end")?.setValue(this.educacion.end);
  }
guardarDatosEducation(){



}

}



