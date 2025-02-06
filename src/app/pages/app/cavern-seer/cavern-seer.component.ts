import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-cavern-seer',
  imports: [],
  templateUrl: './cavern-seer.component.html',
  styleUrl: './cavern-seer.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CavernSeerComponent {

}

export default CavernSeerComponent;
