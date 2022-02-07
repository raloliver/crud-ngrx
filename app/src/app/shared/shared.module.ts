/*
 * File: shared.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:19:36 pm
 * Last Modified: Monday, January 10th 2022, 1:39:20 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TopbarComponent} from './ui/topbar/topbar.component';
import {MenuComponent} from './ui/menu/menu.component';
import {FormComponent} from './ui/form/form.component';

@NgModule({
    declarations: [TopbarComponent, MenuComponent, FormComponent],
    imports: [CommonModule, RouterModule],
    exports: [TopbarComponent, MenuComponent, FormComponent],
})
export class SharedModule {}
