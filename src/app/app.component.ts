import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'kmilo';
  nombre2 = 'KmILo MuÑoZ';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Wolverine',
    clave: 'Logan',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'

    }
  };

  valorDePromesa = new Promise(( resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);

  });

  fecha = new Date();
  // tslint:disable-next-line:no-inferrable-types
  activar: boolean = true;

  video = 'https://www.youtube.com/watch?v=UKMvI-UF4-Q';
}
