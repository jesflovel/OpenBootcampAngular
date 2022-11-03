import { IContacto } from '../models/contacto.interface';

//Exportamos una lista simulada de contactos

export const CONTACTOS: IContacto[] = [
  {
    id: 0,
    nombre: 'Martin',
    apellidos: 'San Jose',
    email: 'martin@angular.com',
    edad: 30,
  },
  {
    id: 1,
    nombre: 'Roberto',
    apellidos: 'Pérez López',
    email: 'robertio@angular.com',
    edad: 29,
  },
  {
    id: 2,
    nombre: 'Jesús',
    apellidos: 'Flores Velasco',
    email: 'jesus@angular.com',
    edad: 30,
  },
];
