import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  readonly #title = inject(Title);

  readonly defaultTitle = 'Grush.org';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this.#title.setTitle(
      (
        title
          ? `${title} | `
          : ''
      ) + this.defaultTitle
    );
  }
}
