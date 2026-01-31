import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../service/api';
import { Membre } from '../models/tontine_model';
interface Fontaine {
  nom: string;
  role: string;
  montant: string;
  dateTour: string;
  dateTourTexte: string;
  action: string;
  actionTexte: string;
}

@Component({
  selector: 'app-tontine-selectionner',
  imports: [CommonModule],
  templateUrl: './tontine-selectionner.html',
  styleUrl: './tontine-selectionner.css',
})
export default class TontineSelectionner implements OnInit {
  username = localStorage.getItem('nom');
  loading=true;
  error=false;
  router=inject(Router)
  api=inject(Api)
  cdr=inject(ChangeDetectorRef);
  id_user?: number;
  membreTontine:Membre[]=[]
    ngOnInit(): void {
      this.id_user=Number(localStorage.getItem('id'));
    this.api.getAllTontineByUser(this.id_user).subscribe
    ({
      next:(data)=>{
        console.log(data);
        this.loading=false
        this.membreTontine=data[0].membres;
        console.log(this.membreTontine.length);
        if(this.membreTontine.length==0){
          this.router.navigate(['/member-dashboard']);
          localStorage.setItem('id_tontine_choisir','0')
        }else if(this.membreTontine.length==1){
          this.router.navigate(['/member-dashboard']);
          localStorage.setItem('id_tontine_choisir',this.membreTontine[0].id_tontine.toString())
        }
        // for(let tont of this.membreTontine){
        //   console.log(tont.tontines.nom);
        //   console.log(tont.tontines.id);
        //   console.log(tont.tontines.frequence);

        // }
        this.cdr.detectChanges()
      },error:(err)=>{
        this.loading=false;
        this.error=true
        console.log(err);
      }
    })

  }
    tontineChoisi(id:number){
      localStorage.setItem('id_tontine_choisir',id.toString())
      this.router.navigate(['/member-dashboard']);
    }

}
