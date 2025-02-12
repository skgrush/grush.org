import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-bpl-and-nsku',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './bpl-and-nsku.component.html',
  styleUrl: './bpl-and-nsku.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BplAndNskuComponent {

}

export default BplAndNskuComponent;
