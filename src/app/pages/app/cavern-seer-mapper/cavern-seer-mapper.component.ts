import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';
import { RepositoryComponent } from '../../../repository/repository.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'grush-cavern-seer-mapper',
  imports: [
    TodoComponent,
    RepositoryComponent,
    RouterLink,
  ],
  templateUrl: './cavern-seer-mapper.component.html',
  styleUrl: './cavern-seer-mapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class CavernSeerMapperComponent {

}

export default CavernSeerMapperComponent;
