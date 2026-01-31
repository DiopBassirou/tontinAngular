import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserProfil } from "../user-profil/user-profil";
import { Api } from '../service/api';
import { MembreTontine } from '../models/membre_tontine_model';

interface MembreIn {
  id: number;
  nom: string;
  telephone: string;
  role: 'Membre' | 'Secrétaire' | 'Trésorier' | 'Président';
  position: string;
  statutPaiement: 'À jour' | 'En retard';
}

@Component({
  selector: 'app-membre',
  imports: [CommonModule, FormsModule, UserProfil,RouterLink],
  templateUrl: './membre.html',
  styleUrl: './membre.css',
})
export class Membre {
constructor(private cdr:ChangeDetectorRef){}

  loading=true;
  error=false;
  nomTontine = '';
  rechercheQuery = signal('');
  filtreRole = signal('');
  filtreStatut = signal('');
  api=inject(Api)
  id_tontine_choisir?:number
  mesMembres:MembreTontine[]=[];
  ngOnInit(){

    this.id_tontine_choisir=Number(localStorage.getItem('id_tontine_choisir'))
    this.api.getMembreParTontine(this.id_tontine_choisir).subscribe({
      next:(data)=>{
        console.log(data[0].membres);
        this.nomTontine=data[0].nom
        this.mesMembres=data[0].membres;

        // for(let m of this.mesMembres){
        //   console.log(m.utilisateur.nom);
        //   console.log(m.utilisateur.telephone);
        //   console.log(m.role);
        //   console.log(m.position);
        //   console.log(m.statut_paiement);
        // }
        this.loading=false;
        this.cdr.detectChanges()
      },error:(err)=>{
        this.error=true
        console.log(err);
      }
    })
  }



  get membresFiltres() {
    return this.mesMembres.filter(m => {
      const matchRecherche = m.utilisateur.nom.toLowerCase().includes(this.rechercheQuery().toLowerCase()) ||
                            m.utilisateur.telephone.includes(this.rechercheQuery());
      const matchRole = !this.filtreRole() || m.role === this.filtreRole();
      const matchStatut = !this.filtreStatut() || m.statut_paiement === this.filtreStatut();

      return matchRecherche && matchRole && matchStatut;
    });
  }

  get rolesDisponibles() {
    return Array.from(new Set(this.mesMembres.map(m => m.role)));
  }

  get statutsDisponibles() {
    return Array.from(new Set(this.mesMembres.map(m => m.statut_paiement)));
  }

  rechercher(query: string) {
    this.rechercheQuery.set(query);
  }

  changerFiltre(type: 'role' | 'statut', valeur: string) {
    if (type === 'role') {
      this.filtreRole.set(this.filtreRole() === valeur ? '' : valeur);
    } else {
      this.filtreStatut.set(this.filtreStatut() === valeur ? '' : valeur);
    }
  }

  ajouterMembre() {
    console.log('Ajouter un membre');
    // TODO: Rediriger vers formulaire d'ajout
  }

  retirerMembre() {
    console.log('Retirer membre');
    // TODO: Logique de suppression
  }

  modifierRole(membre: number) {
    console.log('Modifier rôle de:', membre);
    // TODO: Ouvrir modal de modification
  }

  afficherOptions(membre: number) {
    console.log('Plus d\'options pour:', membre);
    // TODO: Menu contextuel
  }
}

