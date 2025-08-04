import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css','./accueil1.css']
})
export class Accueil implements OnInit, OnDestroy, AfterViewInit {
  currentSlide = 0;
  private intervalId: any;
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Ne rien faire ici, attendre AfterViewInit
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Démarrer le carrousel seulement côté client
      setTimeout(() => {
        this.startCarousel();
      }, 100);
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.stopCarousel();
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 20000); // 20 secondes
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0 || dots.length === 0) {
      return;
    }
    
    // Retirer la classe active de tous les slides et dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Passer au slide suivant
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    
    // Ajouter la classe active au slide et dot actuels
    if (slides[this.currentSlide]) {
      slides[this.currentSlide].classList.add('active');
    }
    if (dots[this.currentSlide]) {
      dots[this.currentSlide].classList.add('active');
    }
  }

  goToSlide(index: number) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0 || dots.length === 0) {
      return;
    }
    
    if (index < 0 || index >= slides.length) {
      return;
    }
    
    // Retirer la classe active de tous les slides et dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Aller au slide spécifié
    this.currentSlide = index;
    
    // Ajouter la classe active au slide et dot actuels
    if (slides[this.currentSlide]) {
      slides[this.currentSlide].classList.add('active');
    }
    if (dots[this.currentSlide]) {
      dots[this.currentSlide].classList.add('active');
    }
    
    // Redémarrer le carrousel automatique
    this.stopCarousel();
    this.startCarousel();
  }
}
