/*
 * File: dashboard.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:45:53 pm
 * Last Modified: Thursday, January 6th 2022, 8:32:05 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
