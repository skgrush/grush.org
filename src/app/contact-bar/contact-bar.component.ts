import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[grush-contact-bar]',
  imports: [],
  templateUrl: './contact-bar.component.html',
  styleUrls: [
    './contact-bar.component.scss',
    '../styles/nav.scss'
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBarComponent {

}
