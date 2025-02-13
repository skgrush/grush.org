import { inject, Injectable } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  readonly #router = inject(Router);
  readonly #document = inject(DOCUMENT);

  readonly #metaDescription = this.#document.querySelector('meta[name=description]')!;

  readonly #updateMetadata$ = this.#router.events.pipe(
    filter(e => e instanceof RouteConfigLoadEnd),
    filter(e => e.route.outlet !== 'nav'),
    tap(e => {
      const routeData = e.route.data;

      this.#metaDescription.setAttribute('content', routeData?.['description'] ?? '');
    }),
  );

  readonly #fx = {
    metadata: this.#updateMetadata$.subscribe(),
  };
}
