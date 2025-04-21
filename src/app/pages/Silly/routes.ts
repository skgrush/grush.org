import { Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    loadComponent: () => import('./silly-nav/silly-nav.component'),
    outlet: 'nav',
  },
  {
    path: '',
    children: [
      {
        path: 'DateReducer',
        loadComponent: () => import('./date-reducer/date-reducer.component'),
        title: 'Date reducer',
        data: {
          description: 'Reduce a date as if it were a ratio'
        }
      },
      {
        path: '**',
        redirectTo: 'DateReducer',
      }
    ],
  },
] as const satisfies Routes;

export default routes;
