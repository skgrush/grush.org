import { inject, Injectable } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { TitleService } from './title.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  readonly #router = inject(Router);
  readonly #document = inject(DOCUMENT);
  readonly #titleService = inject(TitleService);

  readonly #metaDescription = this.#document.querySelector('meta[name=description]')!;
  readonly #metaOgTitle = this.#document.querySelector('meta[property="og:title"]')!;

  readonly #metaTwitterTitle = this.#document.querySelector('meta[property="twitter:title"]')!;
  readonly #metaTwitterDescription = this.#document.querySelector('meta[property="twitter:description"]')!;

  readonly #updateMetadata$ = this.#router.events.pipe(
    filter(e => e instanceof RouteConfigLoadEnd),
    filter(e => e.route.outlet !== 'nav'),
    tap(e => {
      const routeData = e.route.data;

      const description = routeData?.['description'] ?? '';
      this.#metaDescription.setAttribute('content', description);
      this.#metaTwitterDescription.setAttribute('content', description);
    }),
  );

  readonly #fx = {
    metadata: this.#updateMetadata$.pipe(takeUntilDestroyed()).subscribe(),
    title: this.#titleService.rawTitle$
      .pipe(takeUntilDestroyed())
      .subscribe(title => this.updateTitle(title)),
  };

  updateTitle(title: string) {
    this.#metaOgTitle.setAttribute('content', title);
    this.#metaTwitterTitle.setAttribute('content', title);
  }
}
