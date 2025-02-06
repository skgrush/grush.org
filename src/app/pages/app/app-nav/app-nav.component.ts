import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { from, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'grush-app-nav',
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavComponent {
  readonly routes$ = from(import('../routes')).pipe(
    map(({ default: routes }) => routes[1].children
      .filter(route => !!route.data),
    ),
  );
}

export default AppNavComponent;
