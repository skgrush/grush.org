import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TitleService } from './title.service';
import { MetadataService } from './metadata.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: TitleStrategy,
      useExisting: TitleService,
    },
    provideAppInitializer(() => void inject(MetadataService)),
  ]
};
