import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfil } from "../user-profil/user-profil";

interface Paiement {
  id: number;
  membre: string;
  telephone: string;
  methode: 'Wave' | 'Orange Money' | 'Cash';
  montant: number;
  date: string;
  statut: 'Effectué' | 'En retard';
  note?: string;
}

@Component({
  selector: 'app-suivi-finance',
  imports: [CommonModule, FormsModule, UserProfil],
  templateUrl: './suivi-finance.html',
  styleUrl: './suivi-finance.css',
})
export class SuiviFinance {
  rechercheQuery = signal('');
  filtreMethode = signal('');
  filtreStatut = signal('');
  pageActuelle = signal(1);
  elementsParPage = 5;

  paiements = signal<Paiement[]>([
    {
      id: 1,
      membre: 'Aliou Sow',
      telephone: '+221 77 123 4567',
      methode: 'Wave',
      montant: 25000,
      date: '22 Avr. 2024',
      statut: 'Effectué'
    },
    {
      id: 2,
      membre: 'Mariam Ndiaye',
      telephone: '+221 76 987 6543',
      methode: 'Wave',
      montant: 20000,
      date: '22 Avr. 2024',
      statut: 'Effectué',
      note: 'Manque 2 versements'
    },
    {
      id: 3,
      membre: 'Ousmane Ba',
      telephone: '+221 70 345 6789',
      methode: 'Orange Money',
      montant: 32500,
      date: '19 Avr. 2024',
      statut: 'En retard'
    },
    {
      id: 4,
      membre: 'Awa Sy',
      telephone: '+221 78 234 5678',
      methode: 'Cash',
      montant: 25000,
      date: '18 Avr. 2024',
      statut: 'Effectué'
    },
    {
      id: 5,
      membre: 'Khadija Faye',
      telephone: '+221 75 676 5432',
      methode: 'Cash',
      montant: 25000,
      date: '18 Avr. 2024',
      statut: 'En retard',
      note: 'Manque 2 versements'
    },
    {
      id: 6,
      membre: 'Fatou Diop',
      telephone: '+221 77 654 3210',
      methode: 'Wave',
      montant: 20000,
      date: '18 Avr. 2024',
      statut: 'Effectué'
    },
    {
      id: 7,
      membre: 'Cheikh Sow',
      telephone: '+221 70 123 4567',
      methode: 'Orange Money',
      montant: 30000,
      date: '17 Avr. 2024',
      statut: 'Effectué'
    }
  ]);

  // Statistiques
  montantTotalRecu = 980000;
  totalCotisations = 1030000;
  cotisationsRecues = 980000;
  cotisationsEnRetard = 50000;
  pourcentageRecues = 95;

  get paiementsFiltres() {
    return this.paiements().filter(p => {
      const matchRecherche = p.membre.toLowerCase().includes(this.rechercheQuery().toLowerCase()) ||
                            p.telephone.includes(this.rechercheQuery());
      const matchMethode = !this.filtreMethode() || p.methode === this.filtreMethode();
      const matchStatut = !this.filtreStatut() || p.statut === this.filtreStatut();

      return matchRecherche && matchMethode && matchStatut;
    });
  }

  get paiementsPagines() {
    const filtered = this.paiementsFiltres;
    const start = (this.pageActuelle() - 1) * this.elementsParPage;
    const end = start + this.elementsParPage;
    return filtered.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.paiementsFiltres.length / this.elementsParPage);
  }

  get pages() {
    const totalPages = this.totalPages;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  get startItem() {
    return (this.pageActuelle() - 1) * this.elementsParPage + 1;
  }

  get endItem() {
    return Math.min(this.pageActuelle() * this.elementsParPage, this.paiementsFiltres.length);
  }

  get totalItems() {
    return this.paiementsFiltres.length;
  }

  get methodesDisponibles() {
    return Array.from(new Set(this.paiements().map(p => p.methode)));
  }

  get statutsDisponibles() {
    return Array.from(new Set(this.paiements().map(p => p.statut)));
  }

  rechercher(query: string) {
    this.rechercheQuery.set(query);
    this.pageActuelle.set(1);
  }

  changerFiltre(type: 'methode' | 'statut', valeur: string) {
    if (type === 'methode') {
      this.filtreMethode.set(this.filtreMethode() === valeur ? '' : valeur);
    } else {
      this.filtreStatut.set(this.filtreStatut() === valeur ? '' : valeur);
    }
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

  exporter() {
    console.log('Exporter les données');
    // TODO: Logique d'export
  }

  getIconMethode(methode: string): string {
    switch (methode) {
      case 'Wave':
        return 'bi-phone';
      case 'Orange Money':
        return 'bi-mobile';
      case 'Cash':
        return 'bi-cash-coin';
      default:
        return 'bi-credit-card';
    }
  }
}

