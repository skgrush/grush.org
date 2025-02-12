import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-what-time-is-it-in',
  imports: [
    TodoComponent,
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
