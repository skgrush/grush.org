import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'grush-cavern-seer',
  imports: [
    RepositoryComponent,
    RouterLink,
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
