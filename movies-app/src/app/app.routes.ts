import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './app.movie.component';
import { ListMoviesComponent } from './app.listmovies.component';
import { PageNotFoundComponent } from './app.pagenotfound.component';
import { SearchComponent } from './app.search.component';
import { NgModule } from '@angular/core';
import { SearchListMoviesComponent } from './app.searchlistmovies.component';

const routes: Routes = [
    { path: '',
      redirectTo: 'movie-list',
      pathMatch: 'full'
    },
    { path: 'movie-list',
      component: ListMoviesComponent,
    },
    { path: 'movie/:id',
      component: MovieComponent
    },
    { path: 'list-search',
    component: SearchListMoviesComponent,
    },
    { path: 'top-list',
    component: ListMoviesComponent,
    },
    { path: '**',
    component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
