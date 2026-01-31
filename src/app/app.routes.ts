import { Routes } from '@angular/router';
import { MemberDashboard } from './member-dashboard/member-dashboard';
import { Login } from './login/login';
import { MesTontine } from './mes-tontine/mes-tontine';
import { CreerModifTontine } from './creer-modif-tontine/creer-modif-tontine';
import { Membre } from './membre/membre';
import { Cotisation } from './cotisation/cotisation';
import { SuiviFinance } from './suivi-finance/suivi-finance';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path:'tontine-selectionner',
    loadComponent:()=>import('./tontine-selectionner/tontine-selectionner')
  },
  {
    path: 'member-dashboard',
    component: MemberDashboard
  },
  {
    path: 'mes-tontine',
    component: MesTontine
  },
  {
    path: 'creer-tontine',
    component: CreerModifTontine
  },
  {
    path: 'modifier-tontine/:id',
    component: CreerModifTontine
  },
  {
    path: 'membres',
    component: Membre
  },
  {
    path: 'cotisations',
    component: Cotisation
  },
  {
    path: 'suivi-finances',
    component: SuiviFinance
  },
  {
    path: 'rapports',
    loadComponent: () => import('./rapport/rapport').then(m => m.Rapport)
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil').then(m => m.Profil)
  },
  {
    path: 'ajouter-membre',
    loadComponent: () => import('./ajouter-membre/ajouter-membre').then(m => m.AjouterMembre)
  }
  // Ajouter d'autres routes pour les autres pages
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'contributions', component: ContributionsComponent },
];
