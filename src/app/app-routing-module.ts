import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Accueil } from './components/accueil/accueil';
import { Oma } from './components/oma/oma';
import { TravaillerAvecUnArchi } from './components/travailler-avec-un-archi/travailler-avec-un-archi';
import { Faq } from './components/faq/faq';
import { Histoire } from './components/oma/histoire/histoire';
import { Loi2007 } from './components/oma/loi-2007/loi-2007';
import { QuiEstArchi } from './components/travailler-avec-un-archi/qui-est-archi/qui-est-archi';
import { ListeArchitecte } from './components/travailler-avec-un-archi/liste-architecte/liste-architecte';
import { LesPhases } from './components/travailler-avec-un-archi/les-phases/les-phases';
import { LaMissionArchitecte } from './components/travailler-avec-un-archi/la-mission-architecte/la-mission-architecte';
import { ReglementInterieur } from './components/oma/reglement-interieur/reglement-interieur';
import { Mediatheque } from './components/mediatheque/mediatheque';
import { ContacterNous } from './components/contacter-nous/contacter-nous';


const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'histoire', component: Histoire },
  { path: 'qui-est-archi', component: QuiEstArchi },
  { path: '', component: Accueil },
  { path: 'liste-architecte', component: ListeArchitecte },
  { path: 'mission-archi', component:LaMissionArchitecte  },
  { path: 'reglement-interieur', component:ReglementInterieur  },
  { path: 'oma', component: Oma },
  { path: 'histoire', component: Histoire },
  { path: 'la-loi', component: Loi2007 },
  { path: 'travailler', component: TravaillerAvecUnArchi },
  { path: 'mediatheque', component: Mediatheque },
  { path: 'les-phases', component: LesPhases },
  { path: 'contact', component: ContacterNous },
  // { path: 'mediatheque', component: Mediatheque }, // À créer si besoin
  { path: 'faq', component: Faq },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
