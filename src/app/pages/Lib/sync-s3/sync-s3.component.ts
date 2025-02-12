import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-sync-s3',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './sync-s3.component.html',
  styleUrl: './sync-s3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.common-page-layout]': 'true',
  },
})
export class SyncS3Component {

}

export default SyncS3Component;
