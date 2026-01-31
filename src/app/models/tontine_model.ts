export interface CreateTontineResponse {
  message: string;
  tontine: {
    id_tontine: number;
    nom: string;
    description: string | null;
    montant_cotisation: number;
    frequence: string;
    id_utilisateur: number;
    date_debut?: string;
    // ... tu peux ajouter les autres champs ici
  };
}
export interface CreateTontineRequest {
  nom: string;
  description?: string; // Optionnel car 'nullable'
  montant_cotisation: number;
  frequence: 'hebdomadaire' | 'journalier' | 'mensuel';
  date_demarrage: string;
  id_utilisateur: number;
  nombre_max_membres?: number; // Optionnel car 'nullable'
  mode_rotation: 'ordre' | 'aleatoire';
  date_fin?: string; // Optionnel car 'nullable'
}

export interface TontineListItem {
  id:number;
  nom:string;
  montant_cotisation:number;
  frequence:string;
  nombre_max_membres:number;
  date_fin?:string;
}

export interface Membre {
  id: number;
  id_tontine: number;
  id_utilisateur: number;
  role?:string;
  tontines: TontineListItem;
}

export interface MesTontines {
  id: number;
  nom: string;
  // telephone: string;
  // email: string;
  membres: Membre[];
}


