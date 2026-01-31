export interface UtilisateurSimple {
  id: number;
  nom: string;
  telephone: string;
}

export interface MembreTontine {
  id: number;
  id_tontine: number;
  id_utilisateur: number;
  role: 'gestionnaire' | 'membre'; // Union type basé sur vos données
  position: number | null; // Peut être null selon votre JSON
  statut_paiement: string;
  utilisateur: UtilisateurSimple;
}

export interface TontineDetaillee {
  id: number;
  nom: string;
  membres: MembreTontine[];
}

