import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movie',
  templateUrl: './app.movie.component.html',
  styleUrls: ['./app.movie.component.css']
})

export class MovieComponent {

  public title;
  public poster ;
  public overview ;
  public vote_average ;
  public id ;
  public poster_path;
  public release_date: Date;

  constructor(http: Http, id: number) {
    let mds = new MovieDataService(http);
    mds.getOneMovie(id, this);
   }
}
