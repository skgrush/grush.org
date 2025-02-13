import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import routes from '../routes';

@Component({
  selector: 'nav[grush-app-nav]',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavComponent {
  readonly routes = routes[1].children
    .filter((route): route is (typeof route & { title: string }) => 'title' in route && !!route.title && !!route.path)
  ;
}

export default AppNavComponent;
