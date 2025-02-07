import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';

@Component({
  selector: 'grush-what-time-is-it-in',
  imports: [
    TodoComponent,
  ],
  templateUrl: './what-time-is-it-in.component.html',
  styleUrl: './what-time-is-it-in.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatTimeIsItInComponent {

}

export default WhatTimeIsItInComponent;
