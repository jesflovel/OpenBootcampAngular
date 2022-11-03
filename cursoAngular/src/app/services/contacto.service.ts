import { Injectable } from '@angular/core';

//Importamos lista de contatos Mock
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | undefined {
    // // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );
    //Creando un observable
    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); //Emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos más valores
    });
    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
