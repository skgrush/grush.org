import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav[grush-app-nav]',
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavComponent {
  readonly routes$ = from(import('../routes')).pipe(
    map(({ default: routes }) => routes[1].children
      .filter((route): route is (typeof route & { title: string }) => 'title' in route && !!route.title && !!route.path),
    ),
  );
}

export default AppNavComponent;
