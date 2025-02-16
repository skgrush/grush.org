import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from '../../todo/todo.component';

@Component({
  selector: 'grush-home',
  imports: [
    TodoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class HomeComponent {
}

export default HomeComponent;
