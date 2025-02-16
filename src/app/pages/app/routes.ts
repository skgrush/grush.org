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
        redirectTo: 'Grush.org'
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   title: 'Apps',
      //   data: {
      //     description: 'Applications by skgrush',
      //   },
      //   loadComponent: () => import('./app-index.component'),
      // },
      {
        path: 'Grush.org',
        title: 'Grush.org',
        data: {
          description: 'Webpage about this website as a webapp as a project',
        },
        loadComponent: () => import('./this-site/this-site.component'),
      },
      {
        path: 'CavernSeer',
        title: 'CavernSeer',
        data: {
          description: 'iOS and iPadOS app by skgrush for LiDAR scanning and mapping caves.',
        },
        loadComponent: () => import('./cavern-seer/cavern-seer.component'),
      },
      {
        path: 'CavernSeerMapper',
        title: 'CavernSeer Mapper',
        data: {
          description: 'Webapp by skgrush for mapping and compositive LiDAR scan models of caves.',
        },
        loadComponent: () => import('./cavern-seer-mapper/cavern-seer-mapper.component')
      },
      {
        path: 'What-time-is-it-in',
        title: 'What time is it in ...?',
        data: {
          description: 'Webapp by skgrush for comparing timezones.',
        },
        loadComponent: () => import('./what-time-is-it-in/what-time-is-it-in.component'),
      },
      {
        path: 'GUP',
        title: 'GUP',
        data: {
          description: 'Defunct webapp by skgrush for uploading files securely to S3.',
        },
        loadComponent: () => import('./gup/gup.component'),
      },
    ]
  }
] as const satisfies Routes;

export default routes;
