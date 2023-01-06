import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { Impression3dComponent } from './impression3d/impression3d.component';
import { ReparationPCComponent } from './reparation-pc/reparation-pc.component';
import { ReparationtlpComponent } from './reparationtlp/reparationtlp.component';
import { ReseauComponent } from './reseau/reseau.component';
import { SitewebComponent } from './siteweb/siteweb.component';

const routes: Routes = [
 { path: 'acceuil', component: AccueilComponent },
 { path: 'reparationpc', component: ReparationPCComponent },
 { path: 'reparationtlp', component: ReparationtlpComponent },
 { path: 'impression', component: Impression3dComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'reseau', component: ReseauComponent },
 { path: 'creationsiteweb', component: SitewebComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
