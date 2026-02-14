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
      matricule: 'AR1984/004',
      nom: 'Bintou Kaba',
      telephone: '46431923',
      email: 'mamikeme@xn--ahoo-fsa.fr',
      structure: 'Diigokaba',
      photo: '/assets/La_liste_des_archis/Bintou_KABA.jpg'
    },
    {
      matricule: 'AR2012/052',
      nom: 'Boubacar  Sy',
      telephone: '42867044',
      email: 'kassarchitecture@icloud.com',
      structure: 'KASS ARCHITECTURE',
      photo: '/assets/La_liste_des_archis/boubacar sy.jpg'
    },
    {
      matricule: 'AR1986/005',
      nom: 'Sall Abderahmane',
      telephone: '22404778',
      email: 'moodibocarmoodi@yahoo.fr',
      structure: 'CAA - Cabinet d\'Architectes Associes',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR1987/006',
      nom: "N’diaye Mohamed ",
      telephone: '46416944',
      email: 'ndiayemhcau@yahoo.fr',
      structure: 'CAU : Cabinet d\'Architecture et d\'Urbanisme',
      photo: 'assets/La_liste_des_archis/N’diaye Mohamed EL Habib.jpg'
    },
    {
      matricule: 'AR1988/007',
      nom: 'Cheikhna O. Taleb ',
      telephone: '46418943',
      email: 'tacheikhna@yahoo.fr',
      structure: 'G.I.B',
      photo: 'assets/La_liste_des_archis/Cheikhna Ould Taleb Ahmed.jpg'
    },
    {
      matricule: 'AR1996/014',
      nom: 'Mohameden  Tah',
      telephone: '20020061',
      email: 'mcbingenieries@gmail.com',
      structure: 'MCB Multidisciplinary Consulting Bureau',
      photo: '/assets/La_liste_des_archis/AR1996_014 Mohameden Menih TAH.jpg'
    },
    {
      matricule: 'AR1996/015',
      nom: 'Diakhate Issakha',
      telephone: '46411944',
      email: 'bat_controle@yahoo.fr',
      structure: 'BATIS CONTRÔLE',
      photo: '/assets/La_liste_des_archis/AR1996_015 Diakhate Issakha.jpg'
    },
    {
      matricule: 'AR2002/021',
      nom: 'Yahya Ould Babana',
      telephone: '36855051',
      email: 'Yahyafr@yahoo.fr',
      structure: 'BECI',
      photo: '/assets/La_liste_des_archis/AR2002_021 Yahya Ould Babana.jpg'
    },
    {
      matricule: 'AR2004/023',
      nom: 'Abba Fall',
      telephone: '46786710',
      email: 'abobi1@yahoo.fr',
      structure: 'CAUPID',
      photo: '/assets/La_liste_des_archis/AR2004_023 Abba Fall.jpg'
    },
    {
      matricule: 'AR2014/035',
      nom: 'Hadyetou Aly Camara',
      telephone: '48194425',
      email: 'aucaarchitecture@gmail.com',
      structure: 'AUCA Architecture',
      photo: '/assets/La_liste_des_archis/AR2014_035 Hadyetou Aly Camara.jpg'
    },
    {
      matricule: 'AR2015/046',
      nom: 'Yarg Bilal',
      telephone: '49293024',
      email: 'bllyarg@gmail.com',
      structure: 'L\'ARCHITECTE',
      photo: '/assets/La_liste_des_archis/AR2015_046 Yarg Bilal.jpg'
    },
    {
      matricule: 'AR2014/036',
      nom: 'Cheikhani Mohameden',
      telephone: '44144044',
      email: 'cheikh18@gmail.com',
      structure: 'REDWANE',
      photo: '/assets/La_liste_des_archis/AR2014_036 Cheikhani Mohameden Nahwi.jpg'
    },
    {
      matricule: 'AR2010/029',
      nom: 'Mohamed Ould Yedali',
      telephone: '44660166',
      email: 'mammehacen@gmail.com',
      structure: '2A-Architects',
      photo: '/assets/La_liste_des_archis/AR2010_029 Mohamed Ould Yedali.jpg'
    },
    {
      matricule: 'AR2001/048',
      nom: 'Galledou cheikh ',
      telephone: '47728888',
      email: 'ctijane2@yahoo.fr',
      photo: '/assets/La_liste_des_archis/AR2014_038 Mohamed El Khalil Elemine.jpg'
    },
    {
      matricule: 'AR2011/031',
      nom: 'Mohamed El Hadj ',
      telephone: '46737108',
      email: 'arshymed@gmail.com',
      structure: 'ARCHI - MED',
      photo: '/assets/La_liste_des_archis/AR2011_031 Mohamed El Hadj Brahim.jpg'
    },
    {
      matricule: 'AR2014/039',
      nom: 'Fatimettou Nahwi',
      telephone: '20792525',
      email: 'fatimetounahoui@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: '/assets/La_liste_des_archis/fatimetou.jpg'
    },
    {
      matricule: 'AR2020/049',
      nom: 'Hamdinou Mohamed ',
      telephone: '36383798',
      email: 'Tangi@larchitecte.co',
      structure: 'L\'ARCHITECTE',
      photo: 'assets/La_liste_des_archis/Hamdinou_TANGI.jpg'
    },
    {
      matricule: 'AR2012/034',
      nom: 'Lo Aminata',
      telephone: '45558343',
      email: 'lo.aminata2@gmail.com',
      structure: 'Région de Nouakchott',
      photo: 'assets/La_liste_des_archis/amina_Lo.jpg'
    },
    {
      matricule: 'AR2021/053',
      nom: 'EL Hassen NAH',
      telephone: '42712210',
      email: 'hassanlembard@gmail.com',
      structure: 'ATIS',
      photo: 'assets/La_liste_des_archis/al hacen Nah.jpg'
    },
    {
      matricule: 'AR2003/022',
      nom: 'Yahevdou O. Cherif',
      telephone: '46801614',
      email: 'Yahfd5@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/yahevdou ould cherif.jpg'
    },
    {
      matricule: 'AR2022/054',
      nom: 'Ahmed Mohamed ',
      telephone: '44959599',
      email: 'contact@archizone.org',
      structure: 'ARCHI-ZONE',
      photo: 'assets/La_liste_des_archis/AR2022_054 Ahmed Mohamed Mahmoud.jpg'
    },
    {
      matricule: 'AR2015/045',
      nom: 'Sawdatou  Kane',
      telephone: '36861189',
      email: 'Kanesawdatou0@gmail.com',
      structure: 'Mahde Design',
      photo: 'assets/La_liste_des_archis/sawdatou hamedine kane.jpg'
    },
    {
      matricule: 'AR1996/016',
      nom: 'Souleymane Dramane',
      telephone: '44481705',
      email: 'souleysod@gmail.com',
      structure: 'Ministère de l\'Equipement et des Transports (MET)',
      photo: 'assets/La_liste_des_archis/11.jpg'
    },
    {
      matricule: 'AR1992/008',
      nom: 'Cheikh Ahmedou ',
      telephone: '46447813',
      email: 'Chahmedoutas@gmail.com',
      structure: 'TASMIM',
      photo: 'assets/La_liste_des_archis/Cheikh Ahmedou Ould Mohamed Mokhtar.jpg'
    },
   
    {
      matricule: 'AR1994/012',
      nom: 'Ba idrissa',
      telephone: '47188801',
      email: 'baidrissaoumar@gmail.com',
      structure: 'ARCHIFORM',
      photo: 'assets/La_liste_des_archis/ba idrissa.jpg'
    },
    {
      matricule: 'AR1997/017',
      nom: 'Med Moktar El Sid',
      telephone: '49858502',
      email: 'elsidarchitecte@gmail.com',
      structure: 'E&T architectes',
      photo: 'assets/La_liste_des_archis/Med Moktar El sid.jpg'
    },
    {
      matricule: 'AR1974/002',
      nom: 'Boubacar Messaoud',
      telephone: '45254602',
      email: 'boubacar_messoud@yahoo.fr',
      structure: 'CAA - Cabinet d\'Architectes Associes',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'      
    },
    {
      matricule: 'AR1978/003',
      nom: 'Diabira Maryannick',
      telephone: '36302689',
      email: 'diabirafmi@yahoo.fr',
      structure: 'CEAE - Cabinet d\'étude d\'architecture et d\'ingénierie',
      photo: 'assets/La_liste_des_archis/profil femme.jpg'
    },
    {
      matricule: 'AR1992/009',
      nom: 'Lemat Hamadi ',
      telephone: '36309017',
      email: 'Lematt1987@yahoo.fr',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/profil femme.jpg'
    },
    {
      matricule: 'AR1993/010',
      nom: 'Sidi Mohamed O. Med',
      telephone: '36301289',
      email: 'betaconsulte@yahoo.fr',
      structure: 'Betaconsult',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR1994/011',
      nom: 'Abdellahi O. Ahmed ',
      telephone: '46457473',
      email: 'Abdellahiaad@yahoo.fr',
      structure: 'AAD',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
   
    {
      matricule: 'AR1995/013',
      nom: 'Oumeir Hossien ',
      telephone: '46440331',
      email: 'omerarchitecte@gmail.com',
      structure: 'CREA Aménagement',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },


   
    {
      matricule: 'AR2000/019',
      nom: 'Aziz Ould Med ',
      telephone: '42922682',
      email: 'aziz@example.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2001/020',
      nom: 'Mohamed El Hacene',
      telephone: '0033 622453288',
      email: 'mohamedelhassene.bou@gmail.com',
      structure: 'Baudin Châteauneuf - France',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'  
    },

   

    {
      matricule: 'AR2005/024',
      nom: 'Moujtaba Ould Med',
      telephone: '44685541',
      email: 'moujtaba_w@yahoo.fr',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
   
    {
      matricule: 'AR2007/026',
      nom: 'El Mechri Ould Bedde',
      telephone: '36317402',
      email: 'elmechry@yahoo.com',
      structure: 'Bureau africain des consultations et des études techniques',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2007/027',
      nom: 'Habiboullah Ould Cheikh',
      telephone: '00974 30487999',
      email: 'habib_mr2002@yahoo.fr',
      structure: 'Parsons International - Alabama - United States',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2009/028',
      nom: 'Ahmed Salem',
      telephone: '44899676',
      email: 'ahmedarchitecte@yahoo.fr',
      structure: 'STYLE Architecte',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'  
    },
   

    {
      matricule: 'AR2010/030',
      nom: 'Ismael Ould CHOUAIB',
      telephone: '47167891',
      email: 'ismaelchouaib@gmail.com',
      structure: '2A-Architects',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },

    {
      matricule: 'AR1995/032',
      nom: 'Coulibaly SANA',
      telephone: '20137219',
      email: 'snacoulialy@hotmail.fr',
      structure: 'BBI',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'  
    },
    {
      matricule: 'AR2012/033',
      nom: 'Cheikh El Moustapha ',
      telephone: '26302088',
      email: 'haballasidi@gmail.com',
      structure: 'MIMAR ÉTUDES ET CONSULTATIONS',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },



    {
      matricule: 'AR2014/037',
      nom: 'Med Addel Wedoud ',
      telephone: '41443130',
      email: 'arktek-arch-ing@outlook.com',
      structure: 'Arktek',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2014/038',
      nom: 'Med El Khalil ',
      telephone: '26210112',
      email: 'khalil9198@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },

    {
      matricule: 'AR2014/040',
      nom: 'Khadija Med ',
      telephone: '44224043',
      email: 'm.khadija@gmail.com',
      structure: 'Najah',
      photo: 'assets/La_liste_des_archis/profil femme.jpg'
    },
    {
      matricule: 'AR2014/041',
      nom: 'Cheikh Ahmed ',
      telephone: '36106909',
      email: 'Chemed7@hotmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2015/042',
      nom: 'Ahmed Mohamed ',
      telephone: '36460001',
      email: 'Ah.ragel2002@gmail.com',
      structure: 'MIEMAR',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2015/043',
      nom: 'Mettou Hamdi ',
      telephone: '36330402',
      email: 'mettouhamdi04@gmail.com',
      structure: 'CREA',
      photo: 'assets/La_liste_des_archis/profil femme.jpg'
    },
    {
      matricule: 'AR2015/044',
      nom: 'Oumekethoum  Sidina',
      telephone: '26448017',
      email: 'kelthomsser@yahoo.com',
      structure: 'Kelthom Architect Design intérieur',
      photo: 'assets/La_liste_des_archis/profil femme.jpg'
    },
   

    {
      matricule: 'AR2015/047',
      nom: 'Tarba Abidine',
      telephone: '0049 176 30391299',
      email: 'tabidine@graphiq.archi',
      structure: 'GRAPHIQ',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },


    {
      matricule: 'AR2021/050',
      nom: 'Iman Mohamed ',
      telephone: '36046161',
      email: 'Imk.architecture.design@gmail.com',
      structure: 'IMK',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
    {
      matricule: 'AR2017/051',
      nom: 'Ahmed Ghaylani ',
      telephone: '27753289',
      email: 'gailanibarikalla@gmail.com',
      structure: 'Gailani Barikalla',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },


    {
      matricule: 'AR2016/055',
      nom: 'SALEM Sambeit',
      telephone: '+(222) 26966920',
      email: 'Sambeitsalem@gmail.com',
      structure: 'Warda Construction',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    },
   
    {
      matricule: 'AR2021/057',
      nom: 'Ahmed LAKHAL',
      telephone: 'Non spécifié',
      email: 'archi.ahmed10@gmail.com',
      structure: 'Salarié',
      photo: 'assets/La_liste_des_archis/profil homme.jpg'
    }
  ];

  constructor() {
    // Reorder by sequence number (the part after '/') then rotate to start at AR1974/002
    this.reorderBySequenceThenRotate('AR1974/002');
  }

  // Sort members by matricule ascending. Expected format: ARYYYY/NNN
  sortMembresByMatricule() {
    this.membres.sort((a: any, b: any) => {
      const pa = parseMatricule(a.matricule);
      const pb = parseMatricule(b.matricule);
      if (pa.year !== pb.year) return pa.year - pb.year;
      return pa.seq - pb.seq;
    });
  }

  // Sort members by sequence number only (NNN part) then rotate to start at given matricule
  reorderBySequenceThenRotate(startMatricule: string) {
    this.membres.sort((a: any, b: any) => {
      const sa = parseMatricule(a.matricule).seq || 0;
      const sb = parseMatricule(b.matricule).seq || 0;
      return sa - sb;
    });
    if (startMatricule) this.rotateStartAt(startMatricule);
  }

  // Rotate the sorted array so it starts at the given matricule (if found)
  rotateStartAt(matricule: string) {
    if (!matricule) return;
    const idx = this.membres.findIndex((m: any) => (m.matricule || '').toUpperCase() === matricule.toUpperCase());
    if (idx > 0) {
      const head = this.membres.slice(idx);
      const tail = this.membres.slice(0, idx);
      this.membres = head.concat(tail);
    }
  }

  getNamePhoto(nom: string) {
    if (!nom) return 'assets/La_liste_des_archis/profil homme.jpg';
    // Use the original name spacing/characters to match actual filenames in assets
    const safe = nom.replace(/\s+/g, ' ').trim();
    return encodeURI(`assets/La_liste_des_archis/${safe}.jpg`);
  }

  // Return the srcset string for resized webp images (created by scripts/optimize-images.js)
  getSrcset(membre: any) {
    const base = this.getBaseAssetPath(membre);
    if (!base) return '';
    // webp variants expected: name-320.webp, name-640.webp, name-1024.webp
    return `${base}-320.webp 320w, ${base}-640.webp 640w, ${base}-1024.webp 1024w`;
  }

  // Return fallback src (prefer webp 640 if exists after generation, otherwise original)
  getFallbackSrc(membre: any) {
    const base = this.getBaseAssetPath(membre);
    if (!base) return 'assets/La_liste_des_archis/profil homme.jpg';
    return `${base}-640.webp`;
  }

  // derive a base path without extension and without leading slash: assets/La_liste_des_archis/name
  getBaseAssetPath(membre: any) {
    const provided = membre.photo && membre.photo.length ? membre.photo : this.getNamePhoto(membre.nom);
    if (!provided) return '';
    let p = provided.startsWith('/') ? provided.slice(1) : provided;
    p = decodeURI(p);
    // Map legacy placeholder path to no-base so getFallbackSrc will use the svg placeholder
    if (p.indexOf('portrait-de-jeune-femme-souriante-isolee') !== -1) return '';
    const ext = p.lastIndexOf('.') > -1 ? p.slice(0, p.lastIndexOf('.')) : p;
    return encodeURI(ext);
  }

  onPhotoError(event: any, membre: any) {
    const img: HTMLImageElement = event.target as HTMLImageElement;
    // Try fallbacks in order: if initial src was membre.photo -> try generated name, then placeholder
    const photoProvided = membre.photo && membre.photo.length > 0;
    if (photoProvided && img.src && img.src.indexOf(normalizePathForCompare(membre.photo)) !== -1) {
      img.src = this.getNamePhoto(membre.nom);
      return;
    }
    // If initial was generated name or second attempt failed, use placeholder
    img.src = "assets/La_liste_des_archis/profil homme.jpg";
  }

  // Normalize and format telephone for display and href
  displayTelephone(tel: string) {
    if (!tel) return 'Non spécifié';
    return tel.toString().trim();
  }

  getTelHref(tel: string) {
    if (!tel) return '';
    // keep leading + if present, remove other non-digit characters
    const cleaned = tel.toString().trim().replace(/[^+0-9]/g, '');
    return `tel:${cleaned}`;
  }

  // Normalize email for display (lowercase + trimmed)
  displayEmail(email: string) {
    if (!email) return 'Non spécifié';
    return email.toString().trim().toLowerCase();
  }

  getEmailHref(email: string) {
    if (!email) return '';
    return `mailto:${email.toString().trim().toLowerCase()}`;
  }

  normalizePath(path: string) {
    if (!path) return 'assets/utilisateur.svg';
    const p = path.startsWith('/') ? path.slice(1) : path;
    return encodeURI(p);
  }

}

// helper used inside onPhotoError when comparing img.src (absolute) with member.photo
function normalizePathForCompare(p: string) {
  if (!p) return '';
  const path = p.startsWith('/') ? p.slice(1) : p;
  // encode spaces for comparison with img.src which will be absolute URL-encoded
  return encodeURI(path);
}

// Parse matricule string like 'AR1978/003' into numeric parts
function parseMatricule(m: string) {
  if (!m) return { year: 0, seq: 0 };
  const re = /AR(\d{2,4})\/(\d+)/i;
  const match = m.match(re);
  if (!match) return { year: 0, seq: 0 };
  const year = parseInt(match[1], 10) || 0;
  const seq = parseInt(match[2], 10) || 0;
  return { year, seq };
}

