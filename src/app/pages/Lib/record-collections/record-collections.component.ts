import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-record-collections',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './record-collections.component.html',
  styleUrl: './record-collections.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordCollectionsComponent {

}

export default RecordCollectionsComponent;
