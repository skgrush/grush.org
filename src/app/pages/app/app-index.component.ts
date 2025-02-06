import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grush-app-index',
  imports: [],
  templateUrl: './app-index.component.html',
  styleUrl: './app-index.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIndexComponent {

}

export default AppIndexComponent;
