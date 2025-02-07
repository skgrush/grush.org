import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';

@Component({
  selector: 'grush-cavern-seer',
  imports: [
    TodoComponent,
  ],
  templateUrl: './cavern-seer.component.html',
  styleUrl: './cavern-seer.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CavernSeerComponent {

}

export default CavernSeerComponent;
