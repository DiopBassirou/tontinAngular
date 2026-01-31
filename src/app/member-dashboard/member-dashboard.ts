import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfil } from "../user-profil/user-profil";
import { HttpClient } from '@angular/common/http';
import { Api } from '../service/api';
import { HistoriquePaiement, Tour } from '../models/dashboardmembre_model';



@Component({
  selector: 'app-member-dashboard',
  imports: [CommonModule, UserProfil],
  templateUrl: './member-dashboard.html',
  styleUrl: './member-dashboard.css',
})

export class MemberDashboard {
  http=inject(HttpClient);

  api=inject(Api)

  id_user?:number
  id_tontine_choisi?:number
  nameTontine!:string

  myPosition = signal({ position: 1 });
  nextBeneficiary = signal({
    name: '',
    position: 1,
    avatar: ''
  });

  nextDate = signal({
    day: '',
    month: '',
    label: 'Tour prévu'
  });

  notifications = signal([
    { type: 'Rappel de paiement', message: 'Prochain paiement prévu xxxxx' },
    { type: 'Tour Approchant', message: 'Nom sera la prochain bénéficiaire le xxxxx' }
  ]);

  prochaineTour?:Tour[];

  historiquePaiement?:HistoriquePaiement[];

  lastPaymentDate?:string;

  amountContributed!:number;
  date_demarrage!:string;
  date_fin?:string;
  public ngOnInit(){
    this.id_user=Number(localStorage.getItem('id'));
    this.id_tontine_choisi=Number(localStorage.getItem('id_tontine_choisir'));
    this.api.getInfoDashboard(this.id_user,this.id_tontine_choisi).subscribe(
      {
        next: (data) =>{
          console.log(data.les_tours_prevues[0].date_prevue);
          //  console.log(data);
          this.nameTontine=data.tontine.nom;
          this.amountContributed=data.tontine.montant_cotisation
          this.date_demarrage=data.tontine.date_demarrage,
          this.date_fin=data.tontine.date_fin
          this.prochaineTour=data.les_tours_prevues
          this.historiquePaiement=data.historique_paiements

          this.myPosition.set({position:data.positons})
          this.nextBeneficiary.set({
            name:data.les_tours_prevues[0].utilisateur.nom,
            position:data.positons,
            avatar:data.les_tours_prevues[0].utilisateur.nom.charAt(0).toUpperCase()
          })

          this.notifications.set([
            { type:'Rappel de paiement', message: `Prochain paiement prévu ${data.les_tours_prevues[0].date_prevue}`},
            {type: 'Tour Approchant', message: `${data.les_tours_prevues[0].utilisateur.nom} sera le/la prochain bénéficiaire ${data.les_tours_prevues[0].date_prevue}`}
          ])

          this.nextDate.set({
            day:data.les_tours_prevues[0].date_prevue,
            month:data.les_tours_prevues[0].date_prevue,
            label:' Tour prévu'
          })

        },error:(eror)=>{
          console.log(eror);
        }
      }
    )
  }





}
