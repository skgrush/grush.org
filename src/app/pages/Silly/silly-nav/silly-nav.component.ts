import { ChangeDetectionStrategy, Component } from '@angular/core';

import { routes } from '../routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav[grush-silly-nav]',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './silly-nav.component.html',
  styleUrl: './silly-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SillyNavComponent {

  readonly routes = routes[1].children
    .filter((route): route is (typeof route & { title: string }) => 'title' in route && !!route.title);
}

export default SillyNavComponent;
