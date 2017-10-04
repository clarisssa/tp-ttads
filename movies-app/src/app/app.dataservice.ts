import { Component, Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { MovieComponent } from './app.movie.component';
import { Observable } from 'rxjs/Observable';
import { ListMoviesComponent } from './app.listmovies.component';

@Injectable()
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
                            oneMovie.language = movie.spoken_languages[0].name;
                            oneMovie.tagline = movie.tagline;
                            oneMovie.genero = movie.genres[0].name;
                            oneMovie.production_companies = movie.production_companies[0].name;
                            oneMovie.production_countries = movie.production_countries[0].name;
                          }
                );
      return oneMovie;
    }

    searchMovies(texto: string): Observable<any> {
      const listMovies = this.http.get('http://localhost:9000/api/movies/search/' + texto).map(res => res.json());
      return listMovies;
    }

    topMovies(): Observable<any> {
      let listMovies: any;
      listMovies = this.http.get('http://localhost:9000/api/movies/playing').map(res => res.json());
      return listMovies;
    }

    voteMovie(id: number, puntuacion: any): void {
      this.http.post('http://localhost:9000/api/movies/review/' + id, puntuacion);
    }

   }


