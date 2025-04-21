import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    pathMatch: 'full',
    data: {
      description: 'TODO: Insert homepage here',
    }
  },
  {
    path: 'About',
    loadComponent: () => import('./pages/about/about.component'),
    pathMatch: 'full',
    title: 'About',
    data: {
      description: 'Oh just a lil something about me 😳',
    }
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
    path: 'Silly',
    loadChildren: () => import('./pages/Silly/routes'),
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
