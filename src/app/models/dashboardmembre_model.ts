export interface Tour {
  id: number;
  id_tontine: number;
  id_utilisateur: number;
  date_prevue: string;
  statut: 'planifie' | 'termine' | 'en_cours'; // Ajuste selon tes statuts
  periode: number;
  montant_recu: number;
  date_reception: string | null;
  utilisateur:{nom: string;
  telephone: string;
  email: string;
  role: string;}
}

// export interface UserBeneficiaire {
//   id: number;
//   nom: string;
//   telephone: string;
//   email: string;
//   role: string;
//   is_active: boolean;
// }

export interface HistoriquePaiement {
  
  montant: number;
  periode: number;
  mode_paiement: 'wave' | 'orange_money' | 'espece'; // Ajuste selon tes besoins
  date_versement: string;
}

export interface TontineInfo {
  id: number;
  nom: string;
  description: string;
  montant_cotisation: number;
  frequence: string;
  mode_rotation: string;
  id_utilisateur: number;
  nombre_max_membres: number;
  date_demarrage: string;
  date_fin: string;
}

// Interface principale pour ton API
export interface AllInfosTontine {
  user_membre: number;
  positons: number;
  tour_prevu: Tour;
  somme_verser: string; // Gardé en string car entre guillemets dans ton JSON
  les_tours_prevues: Tour[];
  // user_beneficiaire: UserBeneficiaire;
  historique_paiements: HistoriquePaiement[];
  tontine: TontineInfo;
}
