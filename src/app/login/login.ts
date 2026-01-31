import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Api } from '../service/api';
import { UserLoginRequest } from  '../models/user_model';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private fb=inject(FormBuilder);
private router= inject(Router)
apiService =inject(Api);
  loginForm = this.fb.nonNullable.group({
    //ajout non nullable

    telephone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });
  message: string='';

  onConnect() {
    const user: UserLoginRequest=this.loginForm.getRawValue();
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.apiService.UserLogin(user).subscribe({
      next: (response) => {
        //je veux stocker le nom,id et role dans le local storage
        localStorage.setItem('id',response.id.toString())
        localStorage.setItem('nom',response.nom)
        localStorage.setItem('role',response.role)
         this.router.navigate(['/member-dashboard']);
      },
      error: (error) => {
        // alert(JSON.stringify(error.error));
        this.message=error.error.message
        alert(error.error.message);
        console.error('Login failed', error);

      }
    });

  }
}
