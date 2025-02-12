import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';
import { TodoComponent } from '../../../todo/todo.component';

@Component({
  selector: 'grush-gup',
  imports: [
    RepositoryComponent,
    TodoComponent,
  ],
  templateUrl: './gup.component.html',
  styleUrl: './gup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GupComponent {

}

export default GupComponent;
