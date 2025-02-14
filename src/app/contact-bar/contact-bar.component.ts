import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EmailAddressComponent } from './email-address/email-address.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'nav[grush-contact-bar]',
  imports: [
    EmailAddressComponent,
    IconComponent,
  ],
  templateUrl: './contact-bar.component.html',
  styleUrl: './contact-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.opt-out-style]': 'true',
  }
})
export class ContactBarComponent {

  protected readonly emailVisible = signal(false);

  protected toggleEmail() {
    this.emailVisible.update(o => !o);
  }
}
