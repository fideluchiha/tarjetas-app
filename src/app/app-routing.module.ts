import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Tarjetas/agregar/agregar.component';
import { ListarComponent } from './Tarjetas/listar/listar.component';
import { CrearComponent } from './Transacciones/crear/crear.component';
import { ListarTransaccionComponent } from './Transacciones/listar-transaccion/listar-transaccion.component';


const routes: Routes = [{path:'listarTarjetas',component:ListarComponent},
{path:'agregarTarjetas',component:AgregarComponent},
{path:'agregarTransaccion',component:CrearComponent},
{path:'listarTransaccion',component:ListarTransaccionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
