import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { SharedNavigation } from "./shared-navigation/shared-navigation";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedNavigation, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public router: Router) {}
  protected readonly title = signal('tontine-app');
}
