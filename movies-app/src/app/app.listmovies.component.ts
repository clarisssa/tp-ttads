import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieComponent } from './app.movie.component';
import { MovieDataService } from './app.dataservice';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-listmovies',
  templateUrl: './app.listmovies.component.html',
  styleUrls: ['./app.listmovies.component.css']
})

export class ListMoviesComponent {

  public listMovies: MovieComponent[] ;
  public obs: Observable<any>;

  constructor(http: Http) {
    let mds = new MovieDataService(http);
    this.obs = mds.getAllMovies();
    this.obs.subscribe(response => this.listMovies = response.results);
   }
}
