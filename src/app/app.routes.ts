import { Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: SearchResultsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
