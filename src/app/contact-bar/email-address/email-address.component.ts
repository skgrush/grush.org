import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-email-address',
  imports: [],
  templateUrl: './email-address.component.html',
  styleUrl: './email-address.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailAddressComponent {

}
