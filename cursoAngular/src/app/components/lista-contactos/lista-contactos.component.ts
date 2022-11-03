import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactosService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //Subscripcion de servicio
  subscription: Subscription | undefined;

  //Inyectamos en el constuctor el servicio de Contactos
  constructor(private contactoService: ContactosService) {}

  ngOnInit(): void {
    //Obtener la lista de contactos que nos brinda el servicio
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        alert(`Ha habido un error al recuperar la lista de contactos: ${error}`)
      )
      .finally(() =>
        console.log(`Petición de la lista de contactos terminada`)
      );
    console.table(this.listaContactos);
  }

  obtenerContacto(id: number) {
    //console.log(`Obtener info del contacto: ${id}`);
    this.subscription = this.contactoService
      .obtenerContactoPorId(id)
      ?.subscribe(
        (contacto: IContacto) => (this.contactoSeleccionado = contacto)
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
