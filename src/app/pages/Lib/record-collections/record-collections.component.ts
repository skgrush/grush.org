import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-record-collections',
  imports: [],
  templateUrl: './record-collections.component.html',
  styleUrl: './record-collections.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordCollectionsComponent {

}

export default RecordCollectionsComponent;
