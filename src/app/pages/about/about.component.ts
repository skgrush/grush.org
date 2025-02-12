import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'grush-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class AboutComponent {

}

export default AboutComponent;
