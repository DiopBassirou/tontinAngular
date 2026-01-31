import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfil } from "../user-profil/user-profil";


@Component({
  selector: 'app-ajouter-membre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserProfil],
  templateUrl: './ajouter-membre.html',
  styleUrl: './ajouter-membre.css',
})
export class AjouterMembre implements OnInit {
  form!: FormGroup;

  tontines = [
    { id: 'tontine1', name: 'Tontine 1' },
    { id: 'tontine2', name: 'Tontine 2' },
    { id: 'tontine3', name: 'Tontine 3' },
  ];

  roles = ['Membre', 'Admin', 'Trésorier'];
  countryCodes = ['+221', '+1', '+33', '+44'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tontine: ['', Validators.required],
      nomComplet: ['', [Validators.required, Validators.minLength(3)]],
      codePaysTelephone: ['+221'],
      telephone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,}$/)]],
      email: ['', [Validators.email]],
      role: ['Membre', Validators.required],
      position: ['', Validators.required],
      dateDebut: ['', Validators.required],
      statut: ['actif', Validators.required],
    });
  }

  onAnnuler() {
    this.form.reset();
  }

  onAjouter() {
    if (this.form.valid) {
      console.log('Formulaire soumis:', this.form.value);
      // Logic to add member
    } else {
      console.log('Formulaire invalide');
      this.markFormGroupTouched(this.form);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}
