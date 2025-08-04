import { Component } from '@angular/core';
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
}

@Component({
  selector: 'app-mediatheque',
  standalone: false,
  templateUrl: './mediatheque.html',
  styleUrl: './mediatheque.css'
})
export class Mediatheque {

  activities: Activity[] = [
    {
      date: '2025-06-15',
      title: 'Journée Portes Ouvertes',
      description: `Découverte des nouveaux projets de l'OMA et rencontres avec les architectes.`,
      cover: 'assets/img/events/openday.jpg'
    },
    {
      date: '2025-04-20',
      title: 'Conférence « Architecture durable »',
      description: `Table-ronde sur les matériaux écologiques et la construction bioclimatique.`,
      cover: 'assets/img/events/sustainable.jpg'
    }
  ];

  gallery: MediaItem[] = [
    {
      src: 'assets/img/gallery/project01.jpg',
      thumb: 'assets/img/gallery/thumbs/project01.jpg',
      title: 'Projet résidentiel Nouakchott',
      type: 'photo'
    },
    {
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      title: 'Présentation vidéo',
      type: 'video'
    }
  ];

  selectedTab: 'events' | 'photos' | 'videos' = 'events';
item: any;

  openMedia(item: MediaItem): void {
    const viewer = document.getElementById('media-viewer');
    if (!viewer) return;
    viewer.innerHTML = item.type === 'photo'
      ? `<img src="${item.src}" alt="${item.title}" />`
      : `<iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>`;
    viewer.classList.add('open');
  }

  closeViewer(): void {
    const viewer = document.getElementById('media-viewer');
    if (viewer) viewer.classList.remove('open');
  }


}