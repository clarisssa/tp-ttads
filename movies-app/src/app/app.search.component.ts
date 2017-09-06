import { Component,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './app.dataservice';
import { MovieComponent} from './app.movie.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './app.search.component.html',
  styleUrls: ['./app.search.component.css'],
})

export class SearchComponent {
 @Input() texto: string;

searchMovie(http: Http) {
    let mds = new MovieDataService(http);
    let listMovie: MovieComponent[];
    mds.searchMovies(this.texto, listMovie);
   }
}
