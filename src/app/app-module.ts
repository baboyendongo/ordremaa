
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Accueil } from './components/accueil/accueil';
import { Oma } from './components/oma/oma';
import { TravaillerAvecUnArchi } from './components/travailler-avec-un-archi/travailler-avec-un-archi';
import { Faq } from './components/faq/faq';
import { ContacterNous } from './components/contacter-nous/contacter-nous';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { Histoire } from './components/oma/histoire/histoire';
import { Loi2007 } from './components/oma/loi-2007/loi-2007';
import { QuiEstArchi } from './components/travailler-avec-un-archi/qui-est-archi/qui-est-archi';
import { ListeArchitecte } from './components/travailler-avec-un-archi/liste-architecte/liste-architecte';
import { LaMissionArchitecte } from './components/travailler-avec-un-archi/la-mission-architecte/la-mission-architecte';
import { ReglementInterieur } from './components/oma/reglement-interieur/reglement-interieur';
import { Mediatheque } from './components/mediatheque/mediatheque';
import { LesPhases } from './components/travailler-avec-un-archi/les-phases/les-phases';


@NgModule({
  declarations: [
    App,
    Accueil,
    Oma,
    TravaillerAvecUnArchi,
    Faq,
    ContacterNous,
    NavBar,
    Footer,
    Histoire,
    Loi2007,
    QuiEstArchi,
    ListeArchitecte,
    LaMissionArchitecte,
    ReglementInterieur,
    Mediatheque,
    LesPhases
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
