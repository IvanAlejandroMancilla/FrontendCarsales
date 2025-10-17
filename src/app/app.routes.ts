import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { EpisodeDetailComponent } from './pages/episode-detail/episode-detail.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { LugaresComponent } from './pages/lugares/lugares.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'episodes',
    children: [
      {
        path: '',
        component: EpisodesComponent
      },
      {
        path: ':id',
        component: EpisodeDetailComponent
      }
    ]
  },
  {
    path: 'characters',
    component: PersonajesComponent
  },
  {
    path: 'locations',
    component: LugaresComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
