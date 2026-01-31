import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rapport',
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport.html',
  styleUrl: './rapport.css',
})
export class Rapport {
  selectedTontine: string = '';

  tontines = [
    { id: '1', name: 'Tontine Solidarité' },
    { id: '2', name: 'Tontine Succès' },
    { id: '3', name: 'Tontine Entraide' },
  ];

  // Données d'exemple
  stats = {
    montantRecu: '1.540.000 CFA',
    retards: '100.000 CFA',
    transactions: 320,
  };

  paymentMethods = [
    { name: 'Wave', amount: '770 000', color: '#4CAF50' },
    { name: 'Orange Money', amount: '470 000', color: '#1976D2' },
    { name: 'Cash', amount: '300 000', color: '#FF9800' },
  ];

  onTontineChange(event: any) {
    this.selectedTontine = event.target.value;
    // Ici vous pouvez ajouter la logique pour charger les données de la tontine sélectionnée
    console.log('Tontine sélectionnée:', this.selectedTontine);
  }
}
