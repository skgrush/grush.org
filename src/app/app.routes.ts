import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
    pathMatch: 'full',
  },
  {
    path: 'Lib',
    loadChildren: () => import('./pages/Lib/routes'),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
