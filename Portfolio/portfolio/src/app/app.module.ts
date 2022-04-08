import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HardAndSoftComponent } from './componentes/hard-and-soft/hard-and-soft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaDeComponent,
    EducacionComponent,
    ConocimientosComponent,
    ExperienciaComponent,
    HardAndSoftComponent,
    ProyectosComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
