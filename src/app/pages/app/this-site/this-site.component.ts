import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';
import { TodoComponent } from '../../../todo/todo.component';

@Component({
  selector: 'grush-this-site',
  imports: [
    RepositoryComponent,
    TodoComponent,
  ],
  templateUrl: './this-site.component.html',
  styleUrl: './this-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThisSiteComponent {

}

export default ThisSiteComponent;
