import { Routes } from '@angular/router';

export const routes = [
  {
    path: 'DateReducer',
    loadComponent: () => import('./date-reducer/date-reducer.component'),
    title: 'Date reducer',
    data: {
      description: 'Reduce a date as if it were a ratio'
    }
  }
] as const satisfies Routes;

export default routes;
