import { ChangeDetectionStrategy, Component, inject, input, ViewEncapsulation } from '@angular/core';
import { GithubService, IGitHubRepo } from './github.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'grush-repository',
  imports: [
    AsyncPipe,
    DatePipe,
    IconComponent,
  ],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryComponent {

  readonly #githubService = inject(GithubService);

  readonly repoName = input.required<string>();

  readonly repoInfo$: Observable<IGitHubRepo | undefined> = toObservable(this.repoName).pipe(
    switchMap(repoName => this.#githubService.getRepoByName$(repoName)),
  )
}
