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
  private sub: any;

  constructor(http: Http, id: number, private route: ActivatedRoute) {
    const mds = new MovieDataService(http);
    mds.getOneMovie(id, this);
   }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
   }
}
