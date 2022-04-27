import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experience:any;

  constructor(private miServicio:ExperienciaService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosExp().subscribe(data => {console.log(data);
      this.experience = data;
    })
  }

}
