import { Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { DetailedComponent } from './detailed-information/detailed.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: SearchResultsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'detail/:id',
    component: DetailedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];
