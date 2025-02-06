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
        loadComponent: () => import('./app-index.component'),
      },
      {
        path: 'CavernSeer',
        data: {
          appName: 'CavernSeer',
        },
        loadComponent: () => import('./cavern-seer/cavern-seer.component'),
      },
      {
        path: 'CavernSeerMapper',
        data: {
          appName: 'CavernSeerMapper',
        },
        loadComponent: () => import('./cavern-seer-mapper/cavern-seer-mapper.component')
      },
      {
        path: 'What-time-is-it-in',
        data: {
          appName: 'What time is it in ...?'
        },
        loadComponent: () => import('./what-time-is-it-in/what-time-is-it-in.component'),
      }
    ] satisfies Array<Route & { data: undefined | IAppInfo }>
  }
] as const satisfies Routes;

export default routes;
