import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-cavern-seer',
  imports: [
    TodoComponent,
    RepositoryComponent,
  ],
  templateUrl: './cavern-seer.component.html',
  styleUrl: './cavern-seer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CavernSeerComponent {

}

export default CavernSeerComponent;
