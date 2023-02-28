import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Tarjetas/listar/listar.component';
import { AgregarComponent } from './Tarjetas/agregar/agregar.component';
import { FormsModule }from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './Transacciones/crear/crear.component';
import { ListarTransaccionComponent } from './Transacciones/listar-transaccion/listar-transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    CrearComponent,
    ListarTransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
