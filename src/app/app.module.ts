import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MercanciaComponent } from './pages/mercancia/mercancia.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';





@NgModule({
  declarations: [
    AppComponent,
    MercanciaComponent,
    AcercaComponent,
    ClientesComponent,
    NavbarComponent,
    SidebarComponent,
    HeroDetailComponent,
    AccesoriosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
