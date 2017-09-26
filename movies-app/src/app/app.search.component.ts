import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import { MovieComponent} from './app.movie.component';
// import 'rxjs/add/operator/map';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './app.search.component.html',
  styleUrls: ['./app.search.component.css'],
})

export class SearchComponent {

  public obs: Observable<any>;
  public listMovies: MovieComponent[] ;
  @Input() texto: string;

  constructor(http: Http, private mds: MovieDataService) { }

  searchMovie(): void {
    this.obs = this.mds.searchMovies(this.texto);
    this.obs.subscribe(response => this.listMovies = response.results);
   }
}
