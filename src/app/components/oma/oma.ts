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


navigateToHistoire() {
this.router.navigate(['/histoire']);
}
navigateToloi() {
this.router.navigate(['/la-loi']);
}


}
