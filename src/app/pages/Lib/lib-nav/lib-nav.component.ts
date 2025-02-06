import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { from, map } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'nav[grush-lib-nav]',
  imports: [
    RouterLink,
    AsyncPipe,
    RouterLinkActive,
  ],
  templateUrl: './lib-nav.component.html',
  styleUrls: [
    './lib-nav.component.scss',
    '../../../styles/nav.scss',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibNavComponent {

  readonly routes$ = from(import('../routes')).pipe(
    map(({ default: routes }) => routes[1].children
      .filter(route => !!route.data),
    ),
  );
}

export default LibNavComponent;
