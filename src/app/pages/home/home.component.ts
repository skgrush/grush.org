import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { TodoComponent } from '../../todo/todo.component';

@Component({
  selector: 'grush-home',
  imports: [
    TodoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  readonly list = signal([0]);

  add() {
    this.list.update(oldList => [...oldList, oldList.at(-1)! + 1])
  }
}

export default HomeComponent;
