import { Component, OnInit } from '@angular/core';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:any;

  constructor(private miServicio:AcercaDeService ) {

   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data => {console.log(data);
      this.persona = data["persona"];
    })
  }
}
