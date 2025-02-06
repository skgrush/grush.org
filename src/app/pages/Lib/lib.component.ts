import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-lib',
  imports: [],
  templateUrl: './lib.component.html',
  styleUrl: './lib.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibComponent {

}

export default LibComponent;
