import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  active = 0; // 0 = bloqueado, 1 = activo

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    if (this.active === 1) {
      this.router.navigate([route]);
    }
  }

  // Para episodios que siempre está activo
  navigateToEpisodes(): void {
    this.router.navigate(['/episodes']);
  }
}
