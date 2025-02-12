import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { CitationsComponent } from './citations/citations.component';
import { BuildInfoComponent } from './build-info/build-info.component';

@Component({
  selector: 'grush-root',
  imports: [RouterOutlet, NavbarComponent, ContactBarComponent, CitationsComponent, BuildInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
