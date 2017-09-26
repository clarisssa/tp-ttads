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
import { AppRoutingModule} from './app.routes';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    MovieComponent,
    SearchComponent,
    ListMoviesComponent,
    PageNotFoundComponent,
    NgModel
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
