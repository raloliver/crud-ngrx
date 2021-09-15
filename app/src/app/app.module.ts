/*
 * File: app.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 6:52:04 pm
 * Last Modified: Wednesday, September 15th 2021, 8:02:59 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './core/containers/app-page/app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './core/store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        SharedModule,
        StoreModule.forRoot({}, {}),
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
