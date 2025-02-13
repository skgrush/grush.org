import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MetadataService } from './metadata.service';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  readonly #title = inject(Title);
  readonly #metadata = inject(MetadataService);

  readonly defaultTitle = 'Grush.org';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this.#metadata.updateTitle(title ?? this.defaultTitle);
    this.#title.setTitle(
      (
        title
          ? `${title} | `
          : ''
      ) + this.defaultTitle
    );
  }
}
