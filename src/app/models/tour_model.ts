export interface CreateTourRequest {
  id_tontine: number;
  id_utilisateur: number;
  date_prevue: string; // Format YYYY-MM-DD
  date_reception?: string | null; // Optionnel car nullable
}
export interface CreateTourResponse {
    message: string;
    id_tour:number,
    id_tontine: number,
    id_utilisateur: number,
    periode: number,
    date_prevue: string, // Format YYYY-MM-DD
    montant_recu?: number,
    statut: 'planifie' | 'execute',
    date_reception?: string | null,
   // On reprend les mêmes champs en ajoutant l'ID
}
