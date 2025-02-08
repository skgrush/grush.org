import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, of, shareReplay, switchMap, timer } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformServer } from '@angular/common';

export type IGitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  fork: boolean;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  archived: boolean;
  disabled: boolean;
  license: null | {
    key: string;
    name: string;
    spdx_id: string;
  };
  owner: {
    login: string;
    avatar_url: string;
    url: string;
    html_url: string;
  }
  topics: string[];
  watchers: string;
  stars: number;
  forks: number;
  default_branch: string;
};

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly #isServer = isPlatformServer(inject(PLATFORM_ID));

  readonly githubResults$ = of(undefined).pipe(
    switchMap(() =>
      this.#isServer
        ? of(undefined)
        : fromFetch('https://api.github.com/users/skgrush/repos', {
            mode: 'cors',
            priority: 'low',
            cache: 'force-cache',
            headers: {
              'User-Agent': 'skgrush/grush.org',
            },
            selector: response => response.json() as Promise<Array<IGitHubRepo>>,
          })
    ),
    map(repos =>
      repos
        ? new Map(repos.map(r => [r.name, r]))
        : undefined
    ),
    shareReplay(1),
    takeUntilDestroyed(),
  );

  getRepoByName$(name: string) {
    return this.githubResults$.pipe(
      map(repos => repos?.get(name)),
    );
  }
}
