import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/1', component: EpisodeDetailComponent},
  { path: 'characters', component: PersonajesComponent },
  { path: 'locations', component: LugaresComponent },
  { path: '**', redirectTo: '/home' }
];
