import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import { MovieComponent} from './app.movie.component';

@Component({
  selector: 'app-search',
  templateUrl: './app.search.component.html',
  styleUrls: ['./app.search.component.css'],
})

export class SearchComponent {

  public obs: Observable<any>;
  public listMovies: MovieComponent[] ;
  @Input() texto: string;
  @Output() textChange = new EventEmitter<any>();

  constructor(http: Http, private mds: MovieDataService) { }

  emision(): void {
    this.textChange.emit(this.texto);
  }

  // searchMovie(): void {
  //   this.emision();
  //   // this.obs = this.mds.searchMovies(this.texto);
  //   // this.obs.subscribe(response => this.listMovies = response.results);
  //  }
}
