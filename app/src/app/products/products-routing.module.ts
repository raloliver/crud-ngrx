/*
 * File: products-routing.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 8:16:35 pm
 * Last Modified: Thursday, January 6th 2022, 8:43:33 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductEditPageComponent} from './container/product-edit-page/product-edit-page.component';
import {ProductPageComponent} from './container/product-page/product-page.component';
import {ProductsPageComponent} from './container/products-page/products-page.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsPageComponent,
    },
    {
        path: ':id',
        component: ProductPageComponent,
    },
    {
        path: ':id/edit',
        component: ProductEditPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
