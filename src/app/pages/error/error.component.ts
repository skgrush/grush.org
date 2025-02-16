import { afterNextRender, ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { defer, from, map, NEVER, of, shareReplay } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe, isPlatformServer, PlatformLocation } from '@angular/common';

@Component({
  selector: 'grush-error',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {

  readonly #isServer = isPlatformServer(inject(PLATFORM_ID));
  readonly isServer = signal(this.#isServer);
  readonly #location = inject(PlatformLocation);
  readonly #errorPathRe = /\/error(\/(index.html)?)?$/;

  static _hasSentRequest = false;

  readonly pageInfo$ = defer(() => {
    if (ErrorComponent._hasSentRequest) {
      return of({ noBecause: 'hasSentRequest' } as const);
    }
    if (this.#isServer) {
      return NEVER;
    }
    const pathname = this.#location.pathname;
    if (this.#errorPathRe.test(pathname)) {
      return of({ noBecause: 'isErrorPage' } as const);
    }

    ErrorComponent._hasSentRequest = true;

    return from(
      fetch(pathname, {
        method: 'HEAD',
        mode: 'same-origin',
      })
    ).pipe(
      map(response => {
        const amzType = response.headers.get('x-amz-error-code');
        const amzMsg = response.headers.get('x-amz-error-message');

        if (amzType) {
          const errKey = response.headers.get('x-amz-error-detail-key');
          return {
            noBecause: undefined,
            amzType,
            amzMsg,
            errorMessage: (amzMsg ?? 'Unknown') + (errKey ? ': ' + errKey : ''),
          } as const;
        }
        if (response.status >= 400) {
          return {
            noBecause: undefined,
            amzType: undefined,
            amzMsg: undefined,
            errorMessage: `Status code ${response.status} ${response.statusText}`,
          } as const;
        }
        return {
          noBecause: 'nonErrorResponse',
          errorMessage: `Non-error status code ${response.status} ${response.statusText}`,
        } as const;
      }),
    )
  }).pipe(
    // map(result => {
    //
    // }),
    shareReplay(1),
    takeUntilDestroyed(),
  );

  #fx = {
    anr: afterNextRender(() => {
      this.isServer.set(false);
    }),
  }
}

export default ErrorComponent;
