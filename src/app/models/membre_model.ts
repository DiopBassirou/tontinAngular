export interface CreateMembreResponse {
  message: string;
  id_utilisateur: number;
  nom:string;
}
export interface CreateMembreRequest {
  id_tontine: number,
  nom:string,
  telephone:string,
  email: string,
  role:string,
  position:number,
  date_adhesion: string
}
