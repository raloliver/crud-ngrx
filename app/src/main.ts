/*
 * File: main.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 6:52:04 pm
 * Last Modified: Wednesday, September 15th 2021, 7:15:45 pm
 * Copyright © 2021 AMDE Agência
 */

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
