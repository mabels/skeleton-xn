import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function startAjsState(selector: string) {
  if (environment.production) {
    enableProdMode();
  }

  console.log('XXXXXX-2');
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  console.log('XXXXXX-1');
}
