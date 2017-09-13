import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './app.movie.component';
import { ListMoviesComponent } from './app.listmovies.component';
import { PageNotFoundComponent } from './app.pagenotfound.component';

export const routes: Routes = [
    { path: '',
      redirectTo: 'movie-list',
      pathMatch: 'full'
    },
    { path: 'movie-list',
      component: ListMoviesComponent,
    },
    { path: 'movie/:id',
      component: MovieComponent,
    //  redirectTo: 'movie/:id',
    //  pathMatch: 'full',
    },
     { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
