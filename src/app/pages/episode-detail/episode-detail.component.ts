import { NgIf,CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.css'
})
export class EpisodeDetailComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/episodes']);
  }
}
