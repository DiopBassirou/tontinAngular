import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from "../profil/profil";
import { UserProfil } from "../user-profil/user-profil";

@Component({
  selector: 'app-creer-modif-tontine',
  imports: [CommonModule, ReactiveFormsModule,  UserProfil],
  templateUrl: './creer-modif-tontine.html',
  styleUrl: './creer-modif-tontine.css',
})
export class CreerModifTontine {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  formulaireTontine: FormGroup;

  frequences = [
    { valeur: 'journalier', label: 'Journalier' },
    { valeur: 'hebdomadaire', label: 'Hebdomadaire' },
    { valeur: 'mensuel', label: 'Mensuel' }
  ];

  durees = [
    { valeur: 3, label: '3 mois' },
    { valeur: 6, label: '6 mois' },
    { valeur: 12, label: '12 mois' },
    { valeur: 24, label: '24 mois' }
  ];

  ordresTours = [
    { valeur: 'ordre', label: 'Ordre' },
    { valeur: 'priorite', label: 'Priorité' },
    { valeur: 'aleatoire', label: 'Aléatoire' }
  ];

  acces = [
    { valeur: 'privee', label: 'Privée' },
    { valeur: 'publique', label: 'Publique' }
  ];

  methodesPaiement = [
    { valeur: 'manuel', label: 'Manuel', description: 'Les paiements sont traités via l\'application' },
    { valeur: 'mobile-money', label: 'Mobile Money', description: 'Les paiements sont automatiquement prélevés sur vos comptes' }
  ];

  constructor() {
    this.formulaireTontine = this.fb.group({
      nomTontine: ['', [Validators.required, Validators.minLength(3)]],
      acces: ['privee', Validators.required],
      frequence: ['mensuel', Validators.required],
      duree: [12, Validators.required],
      ordresTours: ['ordre', Validators.required],
      dateDebut: ['', Validators.required],
      methodePaiement: ['manuel', Validators.required]
    });
  }

  enregistrer() {
    if (this.formulaireTontine.valid) {
      console.log('Tontine enregistrée:', this.formulaireTontine.value);
      // TODO: Appel API pour enregistrer
      this.router.navigate(['/mes-tontine']);
    } else {
      this.formulaireTontine.markAllAsTouched();
    }
  }

  annuler() {
    this.router.navigate(['/mes-tontine']);
  }

  get nomTontine() {
    return this.formulaireTontine.get('nomTontine');
  }

  get dateDebut() {
    return this.formulaireTontine.get('dateDebut');
  }
}

