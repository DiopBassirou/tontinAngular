import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-navigation',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './shared-navigation.html',
  styleUrl: './shared-navigation.css',
})
export class SharedNavigation {
  menuItems = [
    { icon: 'bi-speedometer2', label: 'Dashboard', active: true },
    { icon: 'bi-people', label: 'Mes Tontines' },
    { icon: 'bi-person', label: 'Membres' },
    { icon: 'bi-cash-coin', label: 'Cotisations' },
    { icon: 'bi-credit-card', label: 'Suivi de finances' },
    { icon: 'bi-graph-up', label: 'Rapports' },
    { icon: 'bi-gear', label: 'Paramètres' }
  ];

  getRouteForMenuItem(label: string): string {
    const routeMap: { [key: string]: string } = {
      'Dashboard': '/member-dashboard',
      'Mes Tontines': '/mes-tontine',
      'Membres': '/membres',
      'Cotisations': '/cotisations',
      'Suivi de finances': '/suivi-finances',
      'Rapports': '/rapports',
      'Paramètres': '/profil'
    };
    return routeMap[label] || '/';
  }
}

