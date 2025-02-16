import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-what-time-is-it-in',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './what-time-is-it-in.component.html',
  styleUrl: './what-time-is-it-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class WhatTimeIsItInComponent {

}

export default WhatTimeIsItInComponent;
