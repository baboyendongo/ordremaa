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
      question: "Qu'est-ce que l'Ordre Mauritanien des Architectes (OMA) ?",
      answer: "L'OMA est l'institution officielle qui encadre, promeut et défend la profession d'architecte en Mauritanie. Il assure la régulation de la profession, la protection du public et le développement de l'architecture mauritanienne."
    },
    {
      question: "Comment devenir membre de l'Ordre Mauritanien des Architectes ?",
      answer: "Pour devenir architecte inscrit à l'OMA, vous devez être titulaire d'un diplôme d'architecture reconnu, avoir une expérience professionnelle suffisante et déposer un dossier de candidature auprès du conseil de l'Ordre. Une commission examine votre dossier et statue sur votre admission."
    },
    {
      question: "Comment trouver un architecte inscrit à l'OMA ?",
      answer: "Consultez la liste officielle des architectes sur notre site dans la section 'Travailler avec un architecte' ou contactez directement le secrétariat de l'Ordre. Tous les architectes inscrits sont certifiés et respectent le code de déontologie de la profession."
    },
    {
      question: "Pourquoi faire appel à un architecte ?",
      answer: "Un architecte garantit la qualité, la sécurité et la conformité de votre projet, tout en apportant créativité et expertise technique. Il vous accompagne de la conception à la réalisation, optimise votre budget et assure la pérennité de votre construction."
    },
    {
      question: "Quels sont les tarifs des architectes ?",
      answer: "Les honoraires des architectes sont libres et varient selon la complexité du projet, la surface, le type de construction et les services demandés. L'OMA publie des barèmes indicatifs. Demandez plusieurs devis pour comparer les offres."
    },
    {
      question: "Quels sont les documents nécessaires pour déposer un dossier à l'OMA ?",
      answer: "La liste des documents varie selon la démarche (inscription, projet, etc.). Généralement : diplôme, CV, justificatifs d'expérience, attestations, photos de réalisations. Consultez la rubrique dédiée sur notre site ou contactez-nous pour la liste complète."
    },
    {
      question: "L'OMA propose-t-il des formations ou événements ?",
      answer: "Oui, l'Ordre organise régulièrement des formations continues, conférences, expositions et événements pour les architectes et le public. Ces activités permettent de maintenir les compétences et de promouvoir l'architecture mauritanienne."
    },
    {
      question: "Comment signaler un problème avec un architecte ?",
      answer: "En cas de litige avec un architecte, contactez d'abord l'Ordre pour une médiation. Si le problème persiste, vous pouvez déposer une plainte formelle auprès du conseil de discipline de l'OMA qui examinera votre dossier."
    },
    {
      question: "Quelles sont les obligations des architectes inscrits à l'OMA ?",
      answer: "Les architectes doivent respecter le code de déontologie, maintenir leurs compétences par la formation continue, souscrire une assurance responsabilité civile, respecter les normes de construction et informer l'Ordre de leurs activités."
    },
    {
      question: "L'OMA peut-il m'aider dans mes démarches administratives ?",
      answer: "Oui, l'Ordre peut vous accompagner dans vos démarches administratives liées à l'urbanisme, les permis de construire, les normes de construction et les réglementations en vigueur en Mauritanie."
    },
    {
      question: "Comment l'OMA contribue-t-il au développement durable ?",
      answer: "L'OMA promeut l'architecture durable et écologique en organisant des formations sur les matériaux locaux, les techniques bioclimatiques et les normes environnementales. Il encourage les architectes à intégrer ces principes dans leurs projets."
    },
    {
      question: "Puis-je consulter les archives ou la médiathèque de l'OMA ?",
      answer: "Oui, l'OMA dispose d'une médiathèque accessible aux membres et au public sur rendez-vous. Elle contient des ouvrages techniques, des revues d'architecture, des plans historiques et des ressources documentaires sur l'architecture mauritanienne."
    },
    {
      question: "Comment l'OMA protège-t-il le patrimoine architectural mauritanien ?",
      answer: "L'Ordre participe à la protection du patrimoine en collaborant avec les autorités, en sensibilisant les architectes aux techniques traditionnelles, en organisant des événements de valorisation et en conseillant sur les projets de restauration."
    },
    {
      question: "L'OMA propose-t-il des services aux entreprises du bâtiment ?",
      answer: "Oui, l'Ordre peut mettre en relation architectes et entreprises du bâtiment, organiser des rencontres professionnelles, proposer des formations communes et faciliter les collaborations pour des projets de qualité."
    },
    {
      question: "Comment contacter l'Ordre Mauritanien des Architectes ?",
      answer: "Vous pouvez nous contacter par téléphone, email, ou en vous rendant à notre siège. Consultez la section 'Nous contacter' sur notre site pour toutes nos coordonnées et horaires d'ouverture."
    }
  ];
  openedIndex: number|null = null;

  toggle(i: number) {
    this.openedIndex = this.openedIndex === i ? null : i;
  }
}
