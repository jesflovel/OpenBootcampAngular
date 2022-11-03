import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
//Modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [AppComponent, SaludoComponent, ListaContactosComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //Agregando modulo personalizado
    ListsModule,
    //Importar el modulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
