import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfil } from "../user-profil/user-profil";
import { Api } from '../service/api';

@Component({
  selector: 'app-cotisation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserProfil],
  templateUrl: './cotisation.html',
  styleUrl: './cotisation.css',
})
export class Cotisation implements OnInit{
  private fb = inject(FormBuilder);
  id_tontine_choisir=Number(localStorage.getItem('id_tontine_choisir'))
  id_utilisateur=Number(localStorage.getItem('id'))
  api=inject(Api)


  ongletActif = signal<'mobile-money' | 'cash'>('mobile-money');


  formulaireMobileMoney: FormGroup;
  formulaireCash: FormGroup;

  methodeMobileMoneySelectionnee = signal<'wave' | 'orange-money'>('wave');

  constructor(private cdr:ChangeDetectorRef) {
    this.formulaireMobileMoney = this.fb.group({
      id_tontine: [this.id_tontine_choisir],
      mode_paiement: ['cash'],
      montant: ['', [Validators.required, Validators.min(1)]],

    });

    this.formulaireCash = this.fb.group({
      tontine: [this.id_tontine_choisir],
      telephone: ["", [Validators.required, Validators.minLength(3)]],
      montant: ['', [Validators.required, Validators.min(1)]],
      note: ['']
    });
  }

  ngOnInit(): void {
    this.api.getUser(this.id_utilisateur).subscribe({
      next:(data)=>{
        console.log(data.telephone);
        this.formulaireCash.patchValue({
          telephone: data.telephone,
        });
        this.cdr.detectChanges()
      },error:(err)=>{
        console.log(err);

      }
    })
  }

  changerOnglet(onglet: 'mobile-money' | 'cash') {
    this.ongletActif.set(onglet);
  }

  changerMethodeMobileMoney(methode: 'wave' | 'orange-money') {
    this.methodeMobileMoneySelectionnee.set(methode);
  }

  payerMobileMoney() {

  }

  validerCash() {
    // if (this.formulaireCash.valid) {
    //   const formValue = this.formulaireCash.value;

    //   const paiement: PaiementHistorique = {
    //     id: Math.max(...this.paiementHistorique().map(p => p.id), 0) + 1,
    //     membre: formValue.nomMembre,
    //     montant: formValue.montant,
    //     methode: 'Cash',
    //     date: new Date().toISOString().split('T')[0],
    //     statut: 'Confirmé'
    //   };

    //   this.paiementHistorique.update(p => [paiement, ...p]);
    //   this.formulaireCash.reset();
    //   console.log('Paiement Cash enregistré:', paiement);
    // }
  }

  // get paiementsMobileMoney() {
  //   return this.paiementHistorique().filter(p => p.methode !== 'Cash');
  // }

   paiementsCash() {
    if(this.formulaireCash.valid){
      const formValue = this.formulaireCash.value;

    }

  }
}

