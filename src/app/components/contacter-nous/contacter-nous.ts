import { Component } from '@angular/core';

@Component({
  selector: 'app-contacter-nous',
  standalone: false,
  templateUrl: './contacter-nous.html',
  styleUrl: './contacter-nous.css'
})
export class ContacterNous {
  
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    });
    
    // Afficher un message de confirmation (à implémenter)
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    form.reset();
  }
}
