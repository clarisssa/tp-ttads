import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { MovieComponent } from './app.movie.component';
import { Observable } from 'rxjs/Observable';
import {ListMoviesComponent} from './app.listmovies.component';

export class MovieDataService {

   constructor(public http: Http) {}

   getAllMovies(): Observable<any> {
    let listMovies: any;
    listMovies = this.http.get('http://localhost:9000/api/movies').map(res => res.json());
    return listMovies;
    }

    getOneMovie(id: number , oneMovie: MovieComponent): MovieComponent {
    this.http.get('http://localhost:9000/api/movies/info/' + id)
      .map(res => res.json())
      .subscribe(movie => {
                            oneMovie.title = movie.title;
                            oneMovie.overview = movie.overview;
                            oneMovie.poster = movie.poster;
                            oneMovie.vote_average = movie.vote_average;
                            oneMovie.poster_path = movie.poster_path;
                            oneMovie.release_date = movie.release_date;
                          }
                );
      return oneMovie;
    }

    searchMovies(texto: string): Observable<any> {
      let listMovies: any;
      listMovies = this.http.get('http://localhost:9000/api/movies/search/' + texto).map(res => res.json());
      return listMovies;
    }

    topMovies(): Observable<any> {
      let listMovies: any;
      listMovies = this.http.get('http://localhost:9000/api/movies/playing').map(res => res.json());
      return listMovies;
    }

   }


