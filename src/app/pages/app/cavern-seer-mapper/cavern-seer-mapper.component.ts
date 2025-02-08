import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-cavern-seer-mapper',
  imports: [
    TodoComponent,
    RepositoryComponent,
  ],
  templateUrl: './cavern-seer-mapper.component.html',
  styleUrl: './cavern-seer-mapper.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CavernSeerMapperComponent {

}

export default CavernSeerMapperComponent;
