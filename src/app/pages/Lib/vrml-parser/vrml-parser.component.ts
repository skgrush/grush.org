import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RepositoryComponent } from '../../../repository/repository.component';

@Component({
  selector: 'grush-vrml-parser',
  imports: [
    RepositoryComponent,
  ],
  templateUrl: './vrml-parser.component.html',
  styleUrl: './vrml-parser.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VrmlParserComponent {

}

export default VrmlParserComponent;
