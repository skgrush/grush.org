import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  readonly #title = inject(Title);

  readonly #metaOgTitle = inject(DOCUMENT).querySelector('meta[property="og:title"]')!;

  readonly defaultTitle = 'Grush.org';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this.#metaOgTitle.setAttribute('content', title ?? this.defaultTitle);
    this.#title.setTitle(
      (
        title
          ? `${title} | `
          : ''
      ) + this.defaultTitle
    );
  }
}
