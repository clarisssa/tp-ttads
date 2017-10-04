import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './app.series.component.html',
  styleUrls: ['./app.movie.component.css']
})

export class SeriesComponent {

  constructor(http: Http, private route: ActivatedRoute, private mds: MovieDataService) { }

}
