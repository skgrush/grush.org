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
        redirectTo: 'RecordCollections'
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   title: 'Libraries',
      //   data: {
      //     description: 'Libraries by skgrush',
      //   },
      //   loadComponent: () => import('./lib-index.component'),
      // },
      {
        path: 'RecordCollections',
        title: 'RecordCollections',
        data: {
          description: '.NET library by skgrush that provides a collection with record semantics and properties.',
        },
        loadComponent: () => import('./record-collections/record-collections.component'),
      },
      {
        path: 'BPlist-and-NSKeyedUnarchiver',
        title: 'BPlist-and-NSKeyedUnarchiver',
        data: {
          description: 'TypeScript library by skgrush for decoding binary plists and unarchiving NSKeyedUnarchiver bplists.',
        },
        loadComponent: () => import('./bpl-and-nsku/bpl-and-nsku.component')
      },
      {
        path: 'sync-s3',
        title: 'sync-s3',
        data: {
          description: 'Node tool by skgrush for syncing directories to S3 with metadata.'
        },
        loadComponent: () => import('./sync-s3/sync-s3.component'),
      },
      {
        path: '**',
        data: undefined,
        redirectTo: '',
      },
    ],
  }
] as const satisfies Routes;

export default routes;
