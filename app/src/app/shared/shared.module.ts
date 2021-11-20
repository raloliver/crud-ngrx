/*
 * File: shared.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:19:36 pm
 * Last Modified: Saturday, November 20th 2021, 12:03:45 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopbarComponent} from './ui/topbar/topbar.component';
import {MenuComponent} from './ui/menu/menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [TopbarComponent, MenuComponent],
    imports: [CommonModule, RouterModule],
    exports: [TopbarComponent, MenuComponent],
})
export class SharedModule {}
