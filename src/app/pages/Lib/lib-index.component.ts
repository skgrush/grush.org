import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../todo/todo.component';

@Component({
  selector: 'grush-lib-index',
  imports: [
    TodoComponent,
  ],
  templateUrl: './lib-index.component.html',
  styleUrl: './lib-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibIndexComponent {

}

export default LibIndexComponent;
