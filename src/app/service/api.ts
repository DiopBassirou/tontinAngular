import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  CreateUser, ResponseUserCreate, UserLoginRequest, UserLoginResponse } from '../models/user_model';
import { AllInfosTontine } from '../models/dashboardmembre_model';
import { CreateTourRequest, CreateTourResponse } from '../models/tour_model';
import { CreateTontineRequest, CreateTontineResponse,  MesTontines, TontineListItem } from '../models/tontine_model';
import { CreateMembreRequest, CreateMembreResponse } from '../models/membre_model';
import { CreatePaymentRequest, PaymentResponse } from '../models/paiement_model';
import { TontineDetaillee } from '../models/membre_tontine_model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  API='http://localhost:8000/api';
  http=inject(HttpClient);
//cette api me permet de m'authentifier
  UserLogin(user:UserLoginRequest){
    return this.http.post<UserLoginResponse>(`${this.API}/utilisateurs/login`,user);
  }
// cette api me permet de creer un user
  createUser(user:CreateUser){
    return this.http.post<ResponseUserCreate>(`${this.API}/utilisateurs/`,user)
  }
// cette api me permet de recuperer un user
  getUser(id:number){
    return this.http.get<ResponseUserCreate>(`${this.API}/utilisateurs/${id}`)
  }

  getInfoDashboard($id:number,$id_tontine:number){
    return this.http.get<AllInfosTontine>(`${this.API}/utilisateurs/dashbord/${$id}/${$id_tontine}`)
  }

  createTour(tour :CreateTourRequest){
    return this.http.post<CreateTourResponse>(`${this.API}/tours/`,tour)
  }

  createTontine(tontine:CreateTontineRequest){
    return this.http.post<CreateTontineResponse>(`${this.API}/tontines/`,tontine)
  }

  createMembre(membre:CreateMembreRequest){
    return this.http.post<CreateMembreResponse>(`${this.API}/membres`,membre)
  }

  createPaiement(paiement:CreatePaymentRequest){
    return this.http.post<PaymentResponse>(`${this.API}/paiements`,paiement)
  }
  //je recupere tout les tontine que ce user fait partie
  getAllTontineByUser($id:number){
    return this.http.get<MesTontines[]>(`${this.API}/tontines/utilisateur/${$id}`)
  }

  getMembreParTontine($id_tontine:number){
   return  this.http.get<TontineDetaillee[]>(`${this.API}/membres/tontine/${$id_tontine}`)
  }
}
