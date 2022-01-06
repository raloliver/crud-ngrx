/*
 * File: categories-routing.module.ts
 * Project: crud-ngrx
 * Created: Thursday, January 6th 2022, 6:50:47 pm
 * Last Modified: Thursday, January 6th 2022, 8:33:43 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriesPageComponent} from './container/categories-page/categories-page.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
