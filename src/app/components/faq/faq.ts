import { Component } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface Category {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  categories: Category[] = [
    { value: 'all', label: 'Toutes', icon: '📋' },
    { value: 'ordre', label: 'L\'Ordre', icon: '🏛️' },
    { value: 'profession', label: 'Profession', icon: '👷' },
    { value: 'demarches', label: 'Démarches', icon: '📝' },
    { value: 'services', label: 'Services', icon: '🛠️' }
  ];

  selectedCategory: string = 'all';
  openedIndex: number | null = null;

  questions: FAQItem[] = [
    {
      question: "Qu'est-ce que l'Ordre Mauritanien des Architectes (OMA) ?",
      answer: "L'OMA est l'institution officielle qui encadre, promeut et défend la profession d'architecte en Mauritanie. Il assure la régulation de la profession, la protection du public et le développement de l'architecture mauritanienne. L'Ordre veille au respect du code de déontologie et garantit la qualité des services architecturaux.",
      category: 'ordre'
    },
    {
      question: "Comment devenir membre de l'Ordre Mauritanien des Architectes ?",
      answer: "Pour devenir architecte inscrit à l'OMA, vous devez être titulaire d'un diplôme d'architecture reconnu (minimum 5 ans d'études), avoir une expérience professionnelle suffisante et déposer un dossier de candidature complet auprès du conseil de l'Ordre. Une commission examine votre dossier et statue sur votre admission après vérification de vos qualifications et de votre éthique professionnelle.",
      category: 'profession'
    },
    {
      question: "Comment trouver un architecte inscrit à l'OMA ?",
      answer: "Consultez la liste officielle des architectes sur notre site dans la section 'Travailler avec un architecte' ou contactez directement le secrétariat de l'Ordre. Tous les architectes inscrits sont certifiés, respectent le code de déontologie de la profession et sont tenus de maintenir leurs compétences à jour. Vous pouvez filtrer par spécialité, localisation ou type de projet.",
      category: 'demarches'
    },
    {
      question: "Pourquoi faire appel à un architecte ?",
      answer: "Un architecte garantit la qualité, la sécurité et la conformité de votre projet, tout en apportant créativité et expertise technique. Il vous accompagne de la conception à la réalisation, optimise votre budget, assure la pérennité de votre construction et respecte les normes environnementales. Son expertise vous fait gagner du temps et évite les erreurs coûteuses.",
      category: 'profession'
    },
    {
      question: "Quels sont les tarifs des architectes ?",
      answer: "Les honoraires des architectes sont libres et varient selon la complexité du projet, la surface, le type de construction et les services demandés (conception, suivi de chantier, etc.). L'OMA publie des barèmes indicatifs pour vous donner une idée des coûts. Il est recommandé de demander plusieurs devis pour comparer les offres et choisir l'architecte qui correspond le mieux à vos besoins et à votre budget.",
      category: 'demarches'
    },
    {
      question: "Quels sont les documents nécessaires pour déposer un dossier à l'OMA ?",
      answer: "La liste des documents varie selon la démarche (inscription, projet, etc.). Généralement, il faut fournir : diplôme d'architecture, CV détaillé, justificatifs d'expérience professionnelle, attestations de stages, photos de réalisations, certificat de bonne conduite, et formulaire de candidature dûment rempli. Consultez la rubrique dédiée sur notre site ou contactez-nous pour obtenir la liste complète et actualisée des documents requis.",
      category: 'demarches'
    },
    {
      question: "L'OMA propose-t-il des formations ou événements ?",
      answer: "Oui, l'Ordre organise régulièrement des formations continues, conférences, expositions, ateliers et événements pour les architectes et le public. Ces activités permettent de maintenir les compétences techniques, de découvrir les dernières innovations, de promouvoir l'architecture mauritanienne et de favoriser les échanges entre professionnels. Consultez notre section 'Actualités' pour connaître les prochains événements.",
      category: 'services'
    },
    {
      question: "Comment signaler un problème avec un architecte ?",
      answer: "En cas de litige avec un architecte, contactez d'abord l'Ordre pour une médiation amiable. Si le problème persiste, vous pouvez déposer une plainte formelle auprès du conseil de discipline de l'OMA qui examinera votre dossier de manière impartiale. L'Ordre prend très au sérieux les plaintes et veille au respect de l'éthique professionnelle par tous ses membres.",
      category: 'ordre'
    },
    {
      question: "Quelles sont les obligations des architectes inscrits à l'OMA ?",
      answer: "Les architectes doivent respecter le code de déontologie, maintenir leurs compétences par la formation continue, souscrire une assurance responsabilité civile professionnelle, respecter les normes de construction en vigueur, informer l'Ordre de leurs activités et tenir à jour leur inscription. Ils doivent également respecter les délais, la confidentialité et agir dans l'intérêt de leurs clients.",
      category: 'profession'
    },
    {
      question: "L'OMA peut-il m'aider dans mes démarches administratives ?",
      answer: "Oui, l'Ordre peut vous accompagner dans vos démarches administratives liées à l'urbanisme, les permis de construire, les normes de construction, les réglementations en vigueur en Mauritanie et les procédures d'autorisation. Nos conseillers peuvent vous orienter et vous fournir les informations nécessaires pour faciliter vos démarches. Contactez-nous pour un rendez-vous.",
      category: 'services'
    },
    {
      question: "Comment l'OMA contribue-t-il au développement durable ?",
      answer: "L'OMA promeut l'architecture durable et écologique en organisant des formations sur les matériaux locaux, les techniques bioclimatiques, l'efficacité énergétique et les normes environnementales. Il encourage les architectes à intégrer ces principes dans leurs projets, participe à des initiatives de développement durable et sensibilise le public aux enjeux environnementaux dans le bâtiment.",
      category: 'ordre'
    },
    {
      question: "Puis-je consulter les archives ou la médiathèque de l'OMA ?",
      answer: "Oui, l'OMA dispose d'une médiathèque accessible aux membres et au public sur rendez-vous. Elle contient des ouvrages techniques, des revues d'architecture, des plans historiques, des ressources documentaires sur l'architecture mauritanienne et internationale, ainsi qu'une collection de projets réalisés. Contactez-nous pour planifier votre visite et consulter nos ressources.",
      category: 'services'
    },
    {
      question: "Comment l'OMA protège-t-il le patrimoine architectural mauritanien ?",
      answer: "L'Ordre participe activement à la protection du patrimoine en collaborant avec les autorités compétentes, en sensibilisant les architectes aux techniques traditionnelles, en organisant des événements de valorisation du patrimoine, en conseillant sur les projets de restauration et en promouvant une architecture qui respecte l'identité culturelle mauritanienne tout en intégrant les innovations modernes.",
      category: 'ordre'
    },
    {
      question: "L'OMA propose-t-il des services aux entreprises du bâtiment ?",
      answer: "Oui, l'Ordre peut mettre en relation architectes et entreprises du bâtiment, organiser des rencontres professionnelles (B2B), proposer des formations communes, faciliter les collaborations pour des projets de qualité et promouvoir les bonnes pratiques dans le secteur de la construction. Nous encourageons les partenariats constructifs entre tous les acteurs du bâtiment.",
      category: 'services'
    },
    {
      question: "Comment contacter l'Ordre Mauritanien des Architectes ?",
      answer: "Vous pouvez nous contacter par téléphone, email, ou en vous rendant à notre siège. Consultez la section 'Nous contacter' sur notre site pour toutes nos coordonnées, horaires d'ouverture et formulaire de contact. Notre équipe est disponible pour répondre à vos questions et vous accompagner dans vos démarches du lundi au vendredi.",
      category: 'demarches'
    },
    {
      question: "Quelle est la différence entre un architecte et un maître d'œuvre ?",
      answer: "L'architecte est un professionnel diplômé qui conçoit et supervise les projets architecturaux. Le maître d'œuvre peut être l'architecte lui-même ou une personne désignée pour coordonner et superviser l'exécution des travaux. L'architecte inscrit à l'OMA a une formation universitaire complète et est soumis au code de déontologie de la profession.",
      category: 'profession'
    },
    {
      question: "L'OMA délivre-t-il des certificats ou attestations ?",
      answer: "Oui, l'Ordre peut délivrer des attestations d'inscription, des certificats de compétence, des documents justificatifs pour vos démarches administratives ou professionnelles. Ces documents certifient votre statut d'architecte inscrit et votre conformité aux exigences de l'Ordre. Contactez le secrétariat pour faire votre demande.",
      category: 'demarches'
    },
    {
      question: "Quels sont les avantages d'être membre de l'OMA ?",
      answer: "Être membre de l'OMA vous donne accès à un réseau professionnel, des formations continues, des événements exclusifs, une reconnaissance officielle, une protection juridique, des ressources documentaires, des opportunités de collaboration et la possibilité de participer à la gouvernance de l'Ordre. C'est aussi un gage de crédibilité et de professionnalisme.",
      category: 'profession'
    }
  ];

  toggle(i: number) {
    this.openedIndex = this.openedIndex === i ? null : i;
  }

  getFilteredQuestions(): FAQItem[] {
    if (this.selectedCategory === 'all') {
      return this.questions;
    }
    return this.questions.filter(q => q.category === this.selectedCategory);
  }
}
