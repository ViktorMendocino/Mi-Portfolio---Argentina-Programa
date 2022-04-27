import { Component, OnInit } from '@angular/core';
import { HardAndSoftService } from 'src/app/servicios/hard-and-soft.service';

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})
export class HardAndSoftComponent implements OnInit {

  hardSkills:any;
  softSkills:any;
  constructor(private miServicio:HardAndSoftService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosHardSkills().subscribe(data => {console.log(data);
      this.hardSkills = data;
    })
    this.miServicio.obtenerDatosSoftSkills().subscribe(data => {console.log(data);
      this.softSkills = data;
    })

  }

}
