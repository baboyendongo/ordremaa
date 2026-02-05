import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oma',
  standalone: false,
  templateUrl: './oma.html',
  styleUrl: './oma.css'
})
export class Oma {

  constructor(private router: Router) { }

  // Conseil restreint — afficher uniquement ces profils
  conseilBureau = [
    {
      nom: 'Mohamed El Khalil',
      fonction: 'Vice-Président',
      photo: '/assets/La_liste_des_archis/AR2014_038 Mohamed El Khalil Elemine.jpg'
    },
    {
      nom: 'Boubacar Sy',
      fonction: 'Secrétaire Général',
      photo: 'assets/La_liste_des_archis/boubacar sy.jpg'
    },
    {
      nom: 'Mohamed Ould Abdelweddoud',
      fonction: 'Trésorier',
      photo: 'assets/La_liste_des_archis/10.jpg'
    },
    {
      nom: 'Cheikh El Moustapha Ould M. Yahya',
      fonction: 'Adjoint au Trésorier',
      photo: '/assets/La_liste_des_archis/cheikh el moustapha ould m. yahya.jpg'
    },
    {
      nom: 'Mme Fatimetou NAHOUI',
      fonction: 'Membre Assesseur',
      photo: '/assets/La_liste_des_archis/fatimetou.jpg'
    },
    {
      nom: 'Amina LO',
      fonction: 'Membre Assesseur',
      photo: '/assets/La_liste_des_archis/lo amina .jpg'
    }
  ];

  // Membres avec charges spécifiques (en bas, ligne séparée)
  conseilCharges = [
    {
      nom: 'Mohamed El Mokhtar El SID',
      fonction: 'chargé de l’Harmonisation des Livrables des Architecte',
      photo: '/assets/La_liste_des_archis/Med Moktar El sid.jpg'
    },
    {
      nom: 'Yarg Bilal ',
      fonction: 'chargé de la Communication et des Relations avec le public.',
      photo: '/assets/La_liste_des_archis/AR2015_046 Yarg Bilal.jpg'
    }
  ];

  // --- Image helpers (mirror liste-architecte logic) ---
  getNamePhoto(nom: string) {
    if (!nom) return 'assets/utilisateur.svg';
    const safe = nom.replace(/\s+/g, ' ').trim();
    return encodeURI(`assets/La_liste_des_archis/${safe}.jpg`);
  }

  // derive a base path without extension and without leading slash
  getBaseAssetPath(membre: any) {
    const provided = membre.photo && membre.photo.length ? membre.photo : this.getNamePhoto(membre.nom);
    if (!provided) return '';
    let p = provided.startsWith('/') ? provided.slice(1) : provided;
    p = decodeURI(p);
    const ext = p.lastIndexOf('.') > -1 ? p.slice(0, p.lastIndexOf('.')) : p;
    return encodeURI(ext);
  }

  getSrcset(membre: any) {
    const base = this.getBaseAssetPath(membre);
    if (!base) return '';
    return `${base}-320.webp 320w, ${base}-640.webp 640w, ${base}-1024.webp 1024w`;
  }

  getFallbackSrc(membre: any) {
    const base = this.getBaseAssetPath(membre);
    if (!base) return 'assets/utilisateur.svg';
    return `${base}-640.webp`;
  }

  onImageError(event: any, membre: any) {
    const img: HTMLImageElement = event.target as HTMLImageElement;
    const photoProvided = membre.photo && membre.photo.length > 0;
    if (photoProvided && img.src && img.src.indexOf(this.normalizePathForCompare(membre.photo)) !== -1) {
      img.src = this.getNamePhoto(membre.nom);
      return;
    }
    img.src = 'assets/utilisateur.png';
  }

  normalizePathForCompare(p: string) {
    if (!p) return '';
    const path = p.startsWith('/') ? p.slice(1) : p;
    return encodeURI(path);
  }


  navigateToHistoire() {
    this.router.navigate(['/histoire']);
  }


  navigateToloi() {
    this.router.navigate(['/la-loi']);
  }


}
