import { Route, Routes } from '@angular/router';

export type ILibInfo = {
  libName: string;
};

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
        data: undefined,
        loadComponent: () => import('./lib-index.component'),
      },
      {
        path: 'RecordCollections',
        data: {
          libName: 'RecordCollections',
        },
        loadComponent: () => import('./record-collections/record-collections.component'),
      },
      {
        path: '**',
        data: undefined,
        redirectTo: '',
      },
    ] as const satisfies Array<Route & { data: ILibInfo | undefined }>,
  }
] as const satisfies Routes;

export default routes;
