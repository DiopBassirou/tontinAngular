import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserProfil } from "../user-profil/user-profil";
import { Api } from '../service/api';
import { Membre, MesTontines } from '../models/tontine_model';


@Component({
  selector: 'app-mes-tontine',
  imports: [CommonModule, FormsModule, RouterLink, UserProfil],
  templateUrl: './mes-tontine.html',
  styleUrl: './mes-tontine.css',
})
export class MesTontine implements OnInit {
  loading=true;
  error=false
  rechercheQuery = signal('');
  pageActuelle = signal(1);
  elementsParPage = 5;
  id_user!:number;
  mesTontines:MesTontines[]=[];
  membreTontine:Membre[]=[];
  api=inject(Api);

  constructor(private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    this.id_user=Number(localStorage.getItem('id'));
    this.api.getAllTontineByUser(this.id_user).subscribe
    ({
      next:(data)=>{
        console.log(data);
        this.loading=false
        this.membreTontine=data[0].membres
        console.log(this.membreTontine.length);

        // for(let tont of this.membreTontine){
        //   console.log(tont.tontines.nom);
        //   console.log(tont.tontines.id);
        //   console.log(tont.tontines.frequence);

        // }
        this.cdr.detectChanges()
      },error:(err)=>{
        this.loading=false;
        this.error=true
        console.log(err);
      }
    })

  }

  tontines = signal<any[]>([
    {
      id: 1,
      name: 'Solidarité Entrepreneuriale',
      amount: 200,
      frequency: 'Hebdomadaire',
      members: 10,
      status: 'En cours',
      icon: 'bi-people'
    },
    {
      id: 2,
      name: 'Cercle d\'Epargne Familiale',
      amount: 150,
      frequency: 'Mensuelle',
      members: 12,
      status: 'En cours',
      icon: 'bi-people'
    },
    {
      id: 3,
      name: 'Investisseurs Solidaires',
      amount: 250,
      frequency: 'Bimensuelle',
      members: 8,
      status: 'En cours',
      icon: 'bi-people'
    },
    {
      id: 4,
      name: 'Amitié et Épargne',
      amount: 100,
      frequency: 'Mensuelle',
      members: 15,
      status: 'Terminé',
      icon: 'bi-people'
    },
    {
      id: 5,
      name: 'Groupe Épargne Vacances',
      amount: 300,
      frequency: 'Mensuelle',
      members: 9,
      status: 'En cours',
      icon: 'bi-people'
    },
    {
      id: 6,
      name: 'Groupe Épargne Vacances',
      amount: 300,
      frequency: 'Mensuelle',
      members: 9,
      status: 'En cours',
      icon: 'bi-people'
    }
  ]);


  get tontinesFiltrees() {
    return this.membreTontine.filter(t =>
      t.tontines.nom.toLowerCase().includes(this.rechercheQuery().toLowerCase())
    );
  }

  get tontinesPaginees() {
    const Tontine = this.tontinesFiltrees;
    const start = (this.pageActuelle() - 1) * this.elementsParPage;
    const end = start + this.elementsParPage;
    return Tontine.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.tontinesFiltrees.length / this.elementsParPage);
  }

  get pages() {
    const totalPages = this.totalPages;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  rechercher(query: string) {
    this.rechercheQuery.set(query);
    this.pageActuelle.set(1);
  }

  allerALaPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageActuelle.set(page);
    }
  }

  pagePrecedente() {
    if (this.pageActuelle() > 1) {
      this.pageActuelle.update(p => p - 1);
    }
  }

  pageSuivante() {
    if (this.pageActuelle() < this.totalPages) {
      this.pageActuelle.update(p => p + 1);
    }
  }


  afficherTontine(tontine:number) {
    console.log('Voir tontine:', tontine);
  }

  modifierTontine(tontine: number) {
    console.log('Éditer tontine:', tontine);
  }
}
