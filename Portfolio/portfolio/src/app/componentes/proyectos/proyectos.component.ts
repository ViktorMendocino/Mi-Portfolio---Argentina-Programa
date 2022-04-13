import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto:any;

  constructor(private miServicio:ProyectosService) {



   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyectos().subscribe(data => {console.log(data);
      this.proyecto = data["proyectos"];
    })
  }

}
