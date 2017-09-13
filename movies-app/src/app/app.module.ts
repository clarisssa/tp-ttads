import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app.header.component';
import { AppFooterComponent } from './app.footer.component';
import { AppBodyComponent } from './app.body.component';
import { MovieComponent } from './app.movie.component';
import { SearchComponent } from './app.search.component';
import { MovieDataService } from './app.dataservice';
import { ListMoviesComponent} from './app.listmovies.component';
import { PageNotFoundComponent } from './app.pagenotfound.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    MovieComponent,
    SearchComponent,
    ListMoviesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
