/*
 * File: core.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:18:23 pm
 * Last Modified: Wednesday, September 15th 2021, 7:41:45 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './containers/app-page/app.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {environment} from '../../environments/environment';

const services = [
    // ProductsService
];

const effects = [
    // ProductsEffect
];

const storeModules = [
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
        name: 'CRUD ngrx',
        maxAge: 25,
        logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        HttpClientModule,
        ...storeModules,
    ],
})
export class CoreModule {}
