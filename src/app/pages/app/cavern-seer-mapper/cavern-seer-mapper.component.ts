import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../../todo/todo.component';

@Component({
  selector: 'grush-cavern-seer-mapper',
  imports: [
    TodoComponent,
  ],
  templateUrl: './cavern-seer-mapper.component.html',
  styleUrl: './cavern-seer-mapper.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CavernSeerMapperComponent {

}

export default CavernSeerMapperComponent;
