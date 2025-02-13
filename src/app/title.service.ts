import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  readonly #title = inject(Title);

  readonly defaultTitle = 'Grush.org';

  readonly #rawTitle$ = new BehaviorSubject<string>('');
  readonly rawTitle$ = this.#rawTitle$.asObservable();

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this.#rawTitle$.next(title ?? this.defaultTitle);
    this.#title.setTitle(
      (
        title
          ? `${title} | `
          : ''
      ) + this.defaultTitle
    );
  }
}
