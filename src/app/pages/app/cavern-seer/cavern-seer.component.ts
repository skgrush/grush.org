import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class CavernSeerComponent {

}

export default CavernSeerComponent;
