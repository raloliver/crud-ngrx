/*
 * File: shared.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:19:36 pm
 * Last Modified: Wednesday, September 15th 2021, 8:32:47 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopbarComponent} from './ui/topbar/topbar.component';
import {MenuComponent} from './ui/menu/menu.component';

@NgModule({
    declarations: [TopbarComponent, MenuComponent],
    imports: [CommonModule],
    exports: [TopbarComponent, MenuComponent],
})
export class SharedModule {}
