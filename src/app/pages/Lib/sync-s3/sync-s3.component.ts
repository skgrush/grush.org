import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-sync-s3',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './sync-s3.component.html',
  styleUrl: './sync-s3.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SyncS3Component {

}

export default SyncS3Component;
