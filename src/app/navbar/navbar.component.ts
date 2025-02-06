import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav[grush-navbar]',
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss',
    '../styles/nav.scss',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
