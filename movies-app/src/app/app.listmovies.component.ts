import { Component, OnInit } from '@angular/core';
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

export class ListMoviesComponent implements OnInit {

  public listMovies: MovieComponent[] ;
  public obs: Observable<any>;
  public selectedMovie: MovieComponent;

  constructor(http: Http, protected mds: MovieDataService) { }

   getAllMovies(): void {
     this.obs = this.mds.getAllMovies();
     this.obs.subscribe(response => this.listMovies = response.results);
   }

   onSelect(movie: MovieComponent): void {
    this.selectedMovie = movie;
   }

  ngOnInit() {
    this.getAllMovies();
  }
}
