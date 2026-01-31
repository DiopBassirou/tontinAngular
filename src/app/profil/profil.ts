import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [CommonModule, FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  activeTab: string = 'info';
  showPhotoModal: boolean = false;
  previewImage: string | null = null;

  userData = {
    fullname: 'Fatou Diop',
    email: 'fatou.diop@email.com',
    phone: '+221 77 654 3210',
  };

  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  saveUserInfo() {
    console.log('Sauvegarde des informations:', this.userData);
    alert('Informations enregistrées avec succès!');
    // Ici vous pouvez ajouter l'appel API pour sauvegarder les données
  }

  changePassword() {
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }

    if (this.passwordData.oldPassword === '' || this.passwordData.newPassword === '') {
      alert('Veuillez remplir tous les champs!');
      return;
    }

    console.log('Changement de mot de passe');
    alert('Mot de passe changé avec succès!');
    // Ici vous pouvez ajouter l'appel API pour changer le mot de passe
    this.passwordData = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  logout() {
    console.log('Déconnexion');
    alert('Vous avez été déconnecté!');
    // Ici vous pouvez ajouter la logique de déconnexion
  }

  openPhotoModal() {
    this.showPhotoModal = true;
  }

  closePhotoModal() {
    this.showPhotoModal = false;
    this.previewImage = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadPhoto() {
    if (this.previewImage) {
      console.log('Upload de la photo');
      alert('Photo mise à jour avec succès!');
      this.closePhotoModal();
      // Ici vous pouvez ajouter l'appel API pour uploader la photo
    } else {
      alert('Veuillez sélectionner une photo!');
    }
  }
}

