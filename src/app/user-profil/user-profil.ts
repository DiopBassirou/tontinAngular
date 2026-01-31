import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  imports: [],
  templateUrl: './user-profil.html',
  styleUrl: './user-profil.css',
})
export class UserProfil {
   user =localStorage.getItem('nom');
 public ngOnInit(){

 }
}
