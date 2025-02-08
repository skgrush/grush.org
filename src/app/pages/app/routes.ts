import { Route, Routes } from '@angular/router';

export type IAppInfo = {
  appName: string;
}

const routes = [
  {
    path: '',
    loadComponent: () => import('./app-nav/app-nav.component'),
    outlet: 'nav',
  },
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: undefined,
        title: 'Apps',
        loadComponent: () => import('./app-index.component'),
      },
      {
        path: 'Grush.org',
        title: 'Grush.org',
        loadComponent: () => import('./this-site/this-site.component'),
      },
      {
        path: 'CavernSeer',
        title: 'CavernSeer',
        loadComponent: () => import('./cavern-seer/cavern-seer.component'),
      },
      {
        path: 'CavernSeerMapper',
        title: 'CavernSeerMapper',
        loadComponent: () => import('./cavern-seer-mapper/cavern-seer-mapper.component')
      },
      {
        path: 'What-time-is-it-in',
        title: 'What time is it in ...?',
        loadComponent: () => import('./what-time-is-it-in/what-time-is-it-in.component'),
      },
      {
        path: 'GUP',
        title: 'GUP',
        loadComponent: () => import('./gup/gup.component'),
      }
    ] satisfies Routes
  }
] as const satisfies Routes;

export default routes;
