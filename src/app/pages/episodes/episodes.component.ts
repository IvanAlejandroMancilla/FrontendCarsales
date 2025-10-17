import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '../../api';
import { Route, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  loading: boolean = false;

  constructor(private episodeService: EpisodeService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEpisodios();
  }

  obtenerEpisodios(): void {
    this.loading = true;
    console.log('Obteniendo episodios...');

    this.episodeService.episodeGet().subscribe({
      next: (data) => {
        console.log('✅ Episodios obtenidos:', data);
        this.episodes = data.results || data;
      },
      error: (err) => {
        console.error('❌ Error al obtener episodios:', err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

verDetalle(episodio: any): void {
  this.router.navigate(['/episodes', episodio.id]);
}
}
