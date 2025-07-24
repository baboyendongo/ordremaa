import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-architecte',
  standalone: false,
  templateUrl: './liste-architecte.html',
  styleUrl: './liste-architecte.css'
})
export class ListeArchitecte {
  membres = [
    {
      matricule: 'AR1974/002',
      nom: 'Boubacar Messaoud',
      telephone: '45254602',
      email: 'boubacar_messoud@yahoo.fr',
      structure: 'CAA - Cabinet d\'Architectes Associes',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1978/003',
      nom: 'Mme Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1978/003',
      nom: 'Mme Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1978/003',
      nom: 'Mme Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1978/003',
      nom: 'Mme Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    // Ajout d'un membre avec l'autre image locale
    {
      matricule: 'AR2024/001',
      nom: 'Nouvelle Architecte',
      telephone: '40000000',
      email: 'nouvelle.archi@example.com',
      structure: 'Nouveau Cabinet',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    // ... suite des membres
    {
      matricule: 'AR1978/003',
      nom: 'Mme Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    }
  ];
  

}
