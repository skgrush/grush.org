import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GupComponent {

}

export default GupComponent;
