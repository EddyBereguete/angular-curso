import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];
  nuevo: Personaje = {
    nombre: 'tronks',
    poder: 14000
  } 

  agregarNuevoPersonaje(argumento: Personaje)
  {
    this.personajes.push(argumento);

  }

}
