/*
 * File: dashboard.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:45:53 pm
 * Last Modified: Wednesday, September 15th 2021, 8:16:02 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
