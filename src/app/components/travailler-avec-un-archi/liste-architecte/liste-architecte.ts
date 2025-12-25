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
      photo:''
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
      matricule: 'AR1984/004',
      nom: 'Bintou Kaba',
      telephone: '46431923',
      email: 'mamikeme@xn--ahoo-fsa.fr',
      structure: 'Diigokaba',
      photo: '/assets/La_liste_des_archis/Bintou_KABA.jpg'
    },
    // {
    //   matricule: 'AR1986/005',
    //   nom: "N’diaye Mohamed EL Habib",
    //   telephone: '22205151',
    //   email: 'moodibocarmoodi@yahoo.fr',
    //   structure: 'CAA - Cabinet d\'Architectes Associes',
    //    photo: 'assets/La_liste_des_archis/Med El Moktar ROUEIHA.jpg'
    // },
    {
      matricule: 'AR1987/006',
      nom: "N’diaye Mohamed EL Habib",
      telephone: '46416944',
      email: 'ndiayemhcau@yahoo.fr',
      structure: 'CAU : Cabinet d\'Architecture et d\'Urbanisme',
       photo: 'assets/La_liste_des_archis/N’diaye Mohamed EL Habib.jpg'
    },
    {
      matricule: 'AR1988/007',
      nom: 'Cheikhna Ould Taleb Ahmed',
      telephone: '46418943',
      email: 'tacheikhna@yahoo.fr',
      structure: 'G.I.B',
      photo: 'assets/La_liste_des_archis/Cheikhna Ould Taleb Ahmed.jpg'
    },
    // {
    //   matricule: 'AR1992/008',
    //   nom: 'Cheikh Ahmedou Ould Mohamed Mokhtar',
    //   telephone: '46447813',
    //   email: 'Chahmedoutas@gmail.com',
    //   structure: 'TASMIM',
    //   photo: 'assets/La_liste_des_archis/Cheikh Ahmedou Ould Mohamed Mokhtar.jpg'
    // },
    {
      matricule: 'AR1992/009',
      nom: 'Lemat Hamadi El Vadel',
      telephone: '36309017',
      email: 'Lematt1987@yahoo.fr',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1993/010',
      nom: 'Sidi Mohamed O. Med Saleh dit Hafed',
      telephone: '36301289',
      email: 'betaconsulte@yahoo.fr',
      structure: 'Betaconsult',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1994/011',
      nom: 'Abdellahi Ould Ahmed Baba',
      telephone: '46457473',
      email: 'Abdellahiaad@yahoo.fr',
      structure: 'AAD',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1994/012',
      nom: 'Ba idrissa',
      telephone: '47188801',
      email: 'baidrissaoumar@gmail.com',
      structure: 'ARCHIFORM',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1995/013',
      nom: 'Oumeir Hossien HOUESSOU',
      telephone: '46440331',
      email: 'omerarchitecte@gmail.com',
      structure: 'CREA Aménagement',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1996/014',
      nom: 'Mohameden Bebeha Tah dit Menih',
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
      matricule: 'AR1996/016',
      nom: 'Souleymane Boubacar Dramane',
      telephone: '44481705',
      email: 'souleysod@gmail.com',
      structure: 'Ministère de l\'Equipement et des Transports (MET)',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR1997/017',
      nom: 'Med Moktar El Sid',
      telephone: '49858502',
      email: 'elsidarchitecte@gmail.com',
      structure: 'E&T architectes',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2000/019',
      nom: 'Aziz Ould Med Abdellahi',
      telephone: '42922682',
      email: 'aziz@example.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2001/020',
      nom: 'Mohamed El Hacene BOU',
      telephone: '0033 622453288',
      email: 'mohamedelhassene.bou@gmail.com',
      structure: 'Baudin Châteauneuf - France',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
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
      matricule: 'AR2003/022',
      nom: 'Yahevdou Ould Cherif',
      telephone: '46801614',
      email: 'Yahfd5@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
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
      matricule: 'AR2005/024',
      nom: 'Moujtaba Ould Med Saleck',
      telephone: '44685541',
      email: 'moujtaba_w@yahoo.fr',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2005/025',
      nom: 'Med Moktar Ould Yahevdhou',
      telephone: '22379905',
      email: 'dg@caupid.com',
      structure: 'CAUPID',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2007/026',
      nom: 'El Mechri Ould Bedde',
      telephone: '36317402',
      email: 'elmechry@yahoo.com',
      structure: 'Bureau africain des consultations et des études techniques',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2007/027',
      nom: 'Habiboullah Ould Cheikh',
      telephone: '00974 30487999',
      email: 'habib_mr2002@yahoo.fr',
      structure: 'Parsons International - Alabama - United States',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2009/028',
      nom: 'Ahmed Salem Ould HAMOUD',
      telephone: '44899676',
      email: 'ahmedarchitecte@yahoo.fr',
      structure: 'STYLE Architecte',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
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
      matricule: 'AR2010/030',
      nom: 'Ismael Ould CHOUAIB',
      telephone: '47167891',
      email: 'ismaelchouaib@gmail.com',
      structure: '2A-Architects',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2011/031',
      nom: 'Mohamed El Hadj Brahim',
      telephone: '46737108',
      email: 'arshymed@gmail.com',
      structure: 'ARCHI - MED',
      photo: '/assets/La_liste_des_archis/AR2011_031 Mohamed El Hadj Brahim.jpg'
    },
    {
      matricule: 'AR1995/032',
      nom: 'Coulibaly SANA',
      telephone: '20137219',
      email: 'snacoulialy@hotmail.fr',
      structure: 'BBI',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2012/033',
      nom: 'Cheikh El Moustapha Ould Mohamed Yahya',
      telephone: '26302088',
      email: 'haballasidi@gmail.com',
      structure: 'MIMAR ÉTUDES ET CONSULTATIONS',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2012/034',
      nom: 'Lo Aminata',
      telephone: '45558343',
      email: 'lo.aminata2@gmail.com',
      structure: 'Région de Nouakchott',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
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
      matricule: 'AR2014/036',
      nom: 'Cheikhani Mohameden Nahwi',
      telephone: '44144044',
      email: 'cheikh18@gmail.com',
      structure: 'REDWANE',
      photo: '/assets/La_liste_des_archis/AR2014_036 Cheikhani Mohameden Nahwi.jpg'
    },
    {
      matricule: 'AR2014/037',
      nom: 'Med Addel Wedoud Med El Kherchy',
      telephone: '41443130',
      email: 'arktek-arch-ing@outlook.com',
      structure: 'Arktek',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2014/038',
      nom: 'Med El Khalil Md Elimine',
      telephone: '26210112',
      email: 'khalil9198@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2014/039',
      nom: 'Fatimettou Nahwi',
      telephone: '20792525',
      email: 'fatimetounahoui@gmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: '/assets/La_liste_des_archis/AR2014_039 Fatimettou Nahwi.jpg'
    },
    {
      matricule: 'AR2014/040',
      nom: 'Khadija Med Moussa',
      telephone: '44224043',
      email: 'm.khadija@gmail.com',
      structure: 'Najah',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2014/041',
      nom: 'Cheikh Ahmed Mohamedou',
      telephone: '36106909',
      email: 'Chemed7@hotmail.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2015/042',
      nom: 'Ahmed Mohamed Sidi',
      telephone: '36460001',
      email: 'Ah.ragel2002@gmail.com',
      structure: 'MIEMAR',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2015/043',
      nom: 'Mettou Hamdi Abdella',
      telephone: '36330402',
      email: 'mettouhamdi04@gmail.com',
      structure: 'CREA',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2015/044',
      nom: 'Oumekethoum Brahim Brahim Sidina',
      telephone: '26448017',
      email: 'kelthomsser@yahoo.com',
      structure: 'Kelthom Architect Design intérieur',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2015/045',
      nom: 'Sawdatou Hamedine Kane',
      telephone: '36861189',
      email: 'Kanesawdatou0@gmail.com',
      structure: 'Mahde Design',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
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
      matricule: 'AR2015/047',
      nom: 'Tarba Abidine',
      telephone: '0049 176 30391299',
      email: 'tabidine@graphiq.archi',
      structure: 'GRAPHIQ',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2001/048',
      nom: 'Galledou cheikh Tidiane',
      telephone: '47728888',
      email: 'ctijane2@yahoo.fr',
      photo: '/assets/La_liste_des_archis/AR2014_038 Mohamed El Khalil Elemine.jpg'
    },
    {
      matricule: 'AR2020/049',
      nom: 'Hamdinou Mohamed Salem TANGI',
      telephone: '36383798',
      email: 'Tangi@larchitecte.co',
      structure: 'L\'ARCHITECTE',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2021/050',
      nom: 'Iman Mohamed Khaled',
      telephone: '36046161',
      email: 'Imk.architecture.design@gmail.com',
      structure: 'IMK',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2017/051',
      nom: 'Ahmed Ghaylani Ahmed',
      telephone: '27753289',
      email: 'gailanibarikalla@gmail.com',
      structure: 'Gailani Barikalla',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2012/052',
      nom: 'Boubacar Ousmane Sy',
      telephone: '42867044',
      email: 'kassarchitecture@icloud.com',
      structure: 'KASS ARCHITECTURE',
      photo: '/assets/La_liste_des_archis/Boubacar ousmane SY.jpg'
    },
    {
      matricule: 'AR2021/053',
      nom: 'EL Hassen NAH',
      telephone: '42712210',
      email: 'hassanlembard@gmail.com',
      structure: 'ATIS',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2022/054',
      nom: 'Ahmed Mohamed Mahmoud',
      telephone: '44959599',
      email: 'contact@archizone.org',
      structure: 'ARCHI-ZONE',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2016/055',
      nom: 'SALEM Sambeit',
      telephone: '+(222) 26966920',
      email: 'Sambeitsalem@gmail.com',
      structure: 'Warda Construction',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2023/066',
      nom: 'Khadijetou EHDHANE',
      telephone: '32406310',
      email: 'khadijetou@example.com',
      structure: 'Ministère de l\'Habitat MHUAT',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    },
    {
      matricule: 'AR2021/057',
      nom: 'Ahmed LAKHAL',
      telephone: 'Non spécifié',
      email: 'archi.ahmed10@gmail.com',
      structure: 'Salarié',
      photo: 'assets/portrait-de-jeune-femme-souriante-isolee.jpg'
    }
  ];

  getNamePhoto(nom: string) {
    if (!nom) return 'assets/portrait-de-jeune-femme-souriante-isolee.jpg';
    const safe = nom.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-\u00C0-\u017F]/g, '');
    return `assets/La_liste_des_archis/${safe}.jpg`;
  }

  onPhotoError(event: any, membre: any) {
    const img: HTMLImageElement = event.target as HTMLImageElement;
    // if current src is name-based, try the membre.photo field next
    const nameSrc = this.getNamePhoto(membre.nom);
    if (img.src && img.src.indexOf(nameSrc) !== -1) {
      img.src = membre.photo || 'assets/portrait-de-jeune-femme-souriante-isolee.jpg';
      return;
    }
    // if membre.photo failed, use placeholder
    img.src = 'assets/portrait-de-jeune-femme-souriante-isolee.jpg';
  }
}
