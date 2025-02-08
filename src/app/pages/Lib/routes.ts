import { Route, Routes } from '@angular/router';

const routes = [
  {
    path: '',
    loadComponent: () => import('./lib-nav/lib-nav.component'),
    outlet: 'nav',
  },
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Libraries',
        data: undefined,
        loadComponent: () => import('./lib-index.component'),
      },
      {
        path: 'RecordCollections',
        title: 'RecordCollections',
        loadComponent: () => import('./record-collections/record-collections.component'),
      },
      {
        path: 'BPlist-and-NSKeyedUnarchiver',
        title: 'BPlist-and-NSKeyedUnarchiver',
        loadComponent: () => import('./bpl-and-nsku/bpl-and-nsku.component')
      },
      {
        path: 'sync-s3',
        title: 'sync-s3',
        loadComponent: () => import('./sync-s3/sync-s3.component'),
      },
      {
        path: '**',
        data: undefined,
        redirectTo: '',
      },
    ] as const satisfies Routes,
  }
] as const satisfies Routes;

export default routes;
