import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';
  usuario = '@pepe';


  /**
   * Esta funcion se ejecuta cuando en el hijo (saludo component) se pulse un boton
   */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }
}
