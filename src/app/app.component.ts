import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';


// imports: [HomeComponent, NavbarComponent, EpisodesComponent],
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prueba Tecnica';
}
