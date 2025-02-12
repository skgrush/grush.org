import { ChangeDetectionStrategy, Component, ViewEncapsulation, VERSION } from '@angular/core';
import buildInfo from './build-info.json';

@Component({
  selector: 'grush-build-info',
  imports: [],
  templateUrl: './build-info.component.html',
  styleUrl: './build-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildInfoComponent {
  protected readonly version = VERSION.full;
  protected readonly buildInfo = Object.freeze(buildInfo);
}
