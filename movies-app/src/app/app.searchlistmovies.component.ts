import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import { MovieComponent} from './app.movie.component';
import { ListMoviesComponent } from './app.listmovies.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchlist',
  templateUrl: './app.searchlistmovies.component.html',
  styleUrls: ['./app.listmovies.component.css'],
})

export class SearchListMoviesComponent extends ListMoviesComponent implements OnInit  {

  public obs: Observable<any>;
  public listMovies: MovieComponent[] ;
  @Input() texto: string;

  constructor(http: Http, protected mds: MovieDataService) {
      super(http, mds);
  }

  searchMovie(texto: string): void {
    this.obs = this.mds.searchMovies(texto);
    this.obs.subscribe(response => this.listMovies = response.results);
   }

   ngOnInit() {
    this.searchMovie(" ");
  }
}
