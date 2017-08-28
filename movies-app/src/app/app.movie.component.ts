import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './app.movie.component.html',
  styleUrls: ['./app.movie.component.css']
})

export class MovieComponent {
  title = 'TITULO DE LA PELI';
  poster = 'IMAGEN PRINCIPAL.jpg';
  overview = 'OVERVIEW' ;
  score = 'PUNTUACIÓN';
  id = 1;
}
