import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  readonly text = input.required<string>();

  readonly dashes = computed(() =>
    '-'.repeat(this.text().length)
  );
  readonly underscores = computed(() =>
    '_'.repeat(this.text().length)
  );
}
