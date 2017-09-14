import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './app.movie.component.html',
  styleUrls: ['./app.movie.component.css']
})

export class MovieComponent implements OnInit {

  public title;
  public poster ;
  public overview ;
  public vote_average ;
  public id ;
  public poster_path;
  public release_date: Date;
  public mds;
  private sub: any;

  constructor(http: Http, private route: ActivatedRoute) {
    this.mds = new MovieDataService(http);
  }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.mds.getOneMovie(this.id, this);
    });
   }
}
