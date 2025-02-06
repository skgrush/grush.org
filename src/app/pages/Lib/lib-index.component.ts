import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-lib-index',
  imports: [],
  templateUrl: './lib-index.component.html',
  styleUrl: './lib-index.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibIndexComponent {

}

export default LibIndexComponent;
