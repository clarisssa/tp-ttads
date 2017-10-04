import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import { MovieComponent} from './app.movie.component';
import { ListMoviesComponent } from './app.listmovies.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toplist',
  templateUrl: './app.listmovies.component.html',
  styleUrls: ['./app.listmovies.component.css'],
})

export class TopMoviesComponent extends ListMoviesComponent implements OnInit  {

  public obs: Observable<any>;
  public listMovies: MovieComponent[] ;

  constructor(http: Http, protected mds: MovieDataService) {
      super(http, mds);
  }

  TopMovies (): void {
    this.obs = this.mds.topMovies();
    this.obs.subscribe(response => this.listMovies = response.results);
   }

   ngOnInit() {
    this.TopMovies();
  }
}
