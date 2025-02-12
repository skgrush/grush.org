import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'grush-citations',
  imports: [],
  templateUrl: './citations.component.html',
  styleUrl: './citations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitationsComponent {
  protected readonly citationsOpened = signal(false);
}
