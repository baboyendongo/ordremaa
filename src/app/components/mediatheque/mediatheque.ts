import { Component, OnInit } from '@angular/core';

interface Activity {
  date: string;
  title: string;
  description: string;
  cover?: string;
}

interface MediaItem {
  src: string;
  thumb: string;
  title?: string;
  type: 'photo' | 'video';
  category?: string;
}

@Component({
  selector: 'app-mediatheque',
  standalone: false,
  templateUrl: './mediatheque.html',
  styleUrl: './mediatheque.css'
})
export class Mediatheque implements OnInit {

  // Liste des images dans assets/mediatheque
  mediathequeImages: string[] = [
    'assets/mediatheque/aerial-view-of-buildings-and-streets-under-a-hazy-sky-contrasting-the-old-with-the-new-nouakchott-ksar-mauritania-3CJNAJN.jpg',
    'assets/mediatheque/flag-of-mauritania-painted-on-brick-wall-2F2Y631.jpg',
    'assets/mediatheque/friday-mosque-in-chinguetti-mauritania-B7B6A0.jpg',
    'assets/mediatheque/friday-mosque-in-chinguetti-mauritania-B7B6CM.jpg',
    'assets/mediatheque/grand-mosque-or-suadi-mosque-in-nouakchott-mauritania-BA1YM5.jpg',
    'assets/mediatheque/in-the-new-town-ouadane-adrar-region-mauritania-ERKCAY.jpg',
    'assets/mediatheque/mauritania-region-adrar-chinguetti-old-town-tents-friday-mosque-africa-H4AN4K.jpg',
    'assets/mediatheque/mauritania-tic-hit-mosque-portal-africa-west-africa-place-of-interest-JEE7GC.jpg',
    'assets/mediatheque/nouakchott0304©Erick_Saillet.jpg',
    'assets/mediatheque/sharm-el-sheikh-egypt-detsember-26-2019-marble-posts-of-mubarak-mosque-big-islamic-church-architecture-details-2B22H9Y.jpg',
    'assets/mediatheque/the-minaret-of-the-mosque-of-nouakchott-mauritania-northwestern-africa-BYB230.jpg',
    'assets/mediatheque/traditional-architecture-toungat-mauritania-2J1JP9M.jpg',
    'assets/mediatheque/western-africa-mauritania-far-south-east-oualata-desert-town-B96MH7.jpg',
    'assets/mediatheque/western-africa-mauritania-far-south-east-oualata-desert-town-B96N84.jpg'
  ];

  activities: Activity[] = [
    {
      date: '15 Juin 2024',
      title: 'Journée Portes Ouvertes',
      description: `Découverte des nouveaux projets de l'OMA et rencontres avec les architectes.`,
      cover: 'assets/mediatheque/nouakchott0304©Erick_Saillet.jpg'
    },
    {
      date: '20 Avril 2024',
      title: 'Conférence « Architecture durable »',
      description: `Table-ronde sur les matériaux écologiques et la construction bioclimatique.`,
      cover: 'assets/mediatheque/aerial-view-of-buildings-and-streets-under-a-hazy-sky-contrasting-the-old-with-the-new-nouakchott-ksar-mauritania-3CJNAJN.jpg'
    }
  ];

  gallery: MediaItem[] = [];

  selectedTab: 'events' | 'photos' | 'videos' = 'photos';
  selectedCategory: string = 'all';
  currentImageIndex: number = -1;

  ngOnInit() {
    // Créer les items de galerie à partir des images
    this.gallery = this.mediathequeImages.map((img, index) => {
      const fileName = img.split('/').pop() || '';
      const title = this.getImageTitle(fileName);
      const category = this.getImageCategory(fileName);
      
      return {
        src: img,
        thumb: img,
        title: title,
        type: 'photo' as const,
        category: category
      };
    });
  }

  getImageTitle(fileName: string): string {
    // Extraire un titre lisible du nom de fichier
    const name = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const words = name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    return words.join(' ').substring(0, 50);
  }

  getImageCategory(fileName: string): string {
    const lower = fileName.toLowerCase();
    if (lower.includes('mosque') || lower.includes('mosquée')) return 'mosquees';
    if (lower.includes('nouakchott') || lower.includes('town') || lower.includes('city')) return 'villes';
    if (lower.includes('traditional') || lower.includes('architecture')) return 'patrimoine';
    if (lower.includes('flag') || lower.includes('mauritania')) return 'symboles';
    return 'autres';
  }

  getCategories(): string[] {
    const cats = new Set(this.gallery.map(item => item.category || 'autres'));
    return ['all', ...Array.from(cats)];
  }

  getFilteredGallery(): MediaItem[] {
    if (this.selectedCategory === 'all') {
      return this.gallery;
    }
    return this.gallery.filter(item => item.category === this.selectedCategory);
  }

  openMedia(item: MediaItem, index?: number): void {
    if (index !== undefined) {
      this.currentImageIndex = index;
    } else {
      const filtered = this.getFilteredGallery();
      this.currentImageIndex = filtered.findIndex(i => i.src === item.src);
    }
    const viewer = document.getElementById('media-viewer');
    if (!viewer) return;
    viewer.innerHTML = item.type === 'photo'
      ? `<img src="${item.src}" alt="${item.title || ''}" />`
      : `<iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>`;
    viewer.classList.add('open');
  }

  closeViewer(): void {
    const viewer = document.getElementById('media-viewer');
    if (viewer) viewer.classList.remove('open');
    this.currentImageIndex = -1;
  }

  nextImage(): void {
    const filtered = this.getFilteredGallery();
    if (this.currentImageIndex < filtered.length - 1) {
      this.currentImageIndex++;
      this.openMedia(filtered[this.currentImageIndex], this.currentImageIndex);
    }
  }

  prevImage(): void {
    const filtered = this.getFilteredGallery();
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.openMedia(filtered[this.currentImageIndex], this.currentImageIndex);
    }
  }
}
