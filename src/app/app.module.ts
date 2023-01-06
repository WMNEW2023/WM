import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { ReparationPCComponent } from './reparation-pc/reparation-pc.component';
import { ReparationtlpComponent } from './reparationtlp/reparationtlp.component';
import { ContactComponent } from './contact/contact.component';
import { ReseauComponent } from './reseau/reseau.component';
import { Impression3dComponent } from './impression3d/impression3d.component';
import { SitewebComponent } from './siteweb/siteweb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    FooterComponent,
    ReparationPCComponent,
    ReparationtlpComponent,
    ContactComponent,
    ReseauComponent,
    Impression3dComponent,
    SitewebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
