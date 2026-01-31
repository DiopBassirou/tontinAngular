export interface PaymentResponse {
  message: string;
  id_utilisateur: number;
  id_tontine: number;
  montant: number;
  mode_paiement: string; // ou 'espece' | 'wave' | 'orange_money'
}
export interface CreatePaymentRequest {
  id_tontine: number;
  montant: number;
  telephone:string;
  mode_paiement: 'wave' | 'orange_money' | 'cash';
}
