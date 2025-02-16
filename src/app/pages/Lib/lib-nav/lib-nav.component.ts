import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import routes from '../routes';

@Component({
  selector: 'nav[grush-lib-nav]',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './lib-nav.component.html',
  styleUrl: './lib-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibNavComponent {

  readonly routes = routes[1].children
    .filter((route): route is (typeof route & { title: string }) => 'title' in route && !!route.title);
}

export default LibNavComponent;
