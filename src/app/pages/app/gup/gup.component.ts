import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-gup',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './gup.component.html',
  styleUrl: './gup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class GupComponent {

}

export default GupComponent;
