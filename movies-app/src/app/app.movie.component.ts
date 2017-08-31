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
  private score ;
  private id ;

  constructor(http: Http) {
    http.get('http://localhost:9000/api/movies/info/278')
      .map(res => res.json())
      .subscribe(movie => this.title = movie.title);
   }
}
