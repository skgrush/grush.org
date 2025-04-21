import { Routes } from '@angular/router';

export const routes = [
  {
    path: 'DateReducer',
    loadComponent: () => import('./date-reducer/date-reducer.component'),
  }
] as const satisfies Routes;

export default routes;
