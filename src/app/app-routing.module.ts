import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MercanciaComponent } from './pages/mercancia/mercancia.component';

const routes: Routes = [

  {
    path:'',component:AppComponent
  },
  {
    path:'acerca',component:AcercaComponent
  }
,
  {
    path:'mercancia',component:MercanciaComponent
  },
  {
    path:'buscar',component:ClientesComponent
  },
  {
    path:'accesorios',component:AccesoriosComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
