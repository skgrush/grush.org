import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../todo/todo.component';

@Component({
  selector: 'grush-app-index',
  imports: [
    TodoComponent,
  ],
  templateUrl: './app-index.component.html',
  styleUrl: './app-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIndexComponent {

}

export default AppIndexComponent;
