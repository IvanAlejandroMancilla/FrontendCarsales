import { NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeService } from '../../api';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.css'
})
export class EpisodeDetailComponent implements OnInit {
  episode: any = null;
  loading: boolean = true;
  episodeId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    // Obtener el ID desde la URL
    this.episodeId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del episodio:', this.episodeId);

    // Cargar el episodio
    this.loadEpisode();
  }

  loadEpisode(): void {
    this.episodeService.episodeIdGet(this.episodeId).subscribe({
      next: (data) => {
        this.episode = data;
        this.loading = false;
        console.log('Episodio cargado:', data);
      },
      error: (err) => {
        console.error('Error al cargar episodio:', err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/episodes']);
  }
}
