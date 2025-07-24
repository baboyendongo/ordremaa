import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  questions = [
    {
      question: "Qu’est-ce que l’Ordre Mauritanien des Architectes (OMA) ?",
      answer: "L’OMA est l’institution officielle qui encadre, promeut et défend la profession d’architecte en Mauritanie."
    },
    {
      question: "Comment trouver un architecte inscrit à l’OMA ?",
      answer: "Consultez la liste officielle des architectes sur notre site ou contactez le secrétariat de l’Ordre."
    },
    {
      question: "Pourquoi faire appel à un architecte ?",
      answer: "Un architecte garantit la qualité, la sécurité et la conformité de votre projet, tout en apportant créativité et expertise technique."
    },
    {
      question: "Quels sont les documents nécessaires pour déposer un dossier à l’OMA ?",
      answer: "La liste des documents varie selon la démarche (inscription, projet, etc.). Consultez la rubrique dédiée ou contactez-nous."
    },
    {
      question: "L’OMA propose-t-il des formations ou événements ?",
      answer: "Oui, l’Ordre organise régulièrement des formations, conférences et événements pour les architectes et le public."
    }
  ];
  openedIndex: number|null = null;

  toggle(i: number) {
    this.openedIndex = this.openedIndex === i ? null : i;
  }
}
