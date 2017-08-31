import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movie',
  templateUrl: './app.movie.component.html',
  styleUrls: ['./app.movie.component.css']
})

export class MovieComponent {
  public title: string;
  private poster ;
  private overview ;
  private vote_average ;
  private id ;
  private poster_path;
  private release_date: Date;

  constructor(http: Http) {
    http.get('http://localhost:9000/api/movies/info/278')
      .map(res => res.json())
      .subscribe(movie => {
                            this.title = movie.title;
                            this.id = movie.id;
                            this.overview = movie.overview;
                            this.vote_average = movie.vote_average;
                            this.poster_path = movie.poster_path;
                            this.release_date = movie.release_date;
                          }
                );
   }
}
