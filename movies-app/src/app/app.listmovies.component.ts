import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieComponent } from './app.movie.component';
import { MovieDataService } from './app.dataservice';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmovies',
  templateUrl: './app.listmovies.component.html',
  styleUrls: ['./app.listmovies.component.css']
})

export class ListMoviesComponent {

  public listMovies: MovieComponent[] ;
  public obs: Observable<any>;
  public selectedMovie: MovieComponent;

<<<<<<< HEAD
  constructor(http: Http, private router: Router) {
=======
  constructor(http: Http) {
>>>>>>> 2e7d9265635275149b55beb3fccca2823f424066
    const mds = new MovieDataService(http);
    this.obs = mds.getAllMovies();
    this.obs.subscribe(response => this.listMovies = response.results);
   }

   onSelect(movie: MovieComponent): void {
    this.selectedMovie = movie;
   }

   goToDetail(): void {
    this.router.navigate(['/movie', this.selectedMovie.id]);
  }
}
