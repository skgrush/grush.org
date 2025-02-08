import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    pathMatch: 'full',
  },
  {
    path: 'About',
    loadComponent: () => import('./pages/about/about.component'),
    pathMatch: 'full',
    title: 'About',
  },
  {
    path: 'Lib',
    loadChildren: () => import('./pages/Lib/routes'),
  },
  {
    path: 'App',
    loadChildren: () => import('./pages/app/routes'),
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error.component'),
  }
];
