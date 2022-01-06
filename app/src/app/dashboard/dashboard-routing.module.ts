/*
 * File: dashboard-routing.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 8:10:21 pm
 * Last Modified: Thursday, January 6th 2022, 8:32:59 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
