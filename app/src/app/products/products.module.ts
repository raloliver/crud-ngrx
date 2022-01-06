/*
 * File: products.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:45:15 pm
 * Last Modified: Thursday, January 6th 2022, 8:31:09 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsPageComponent} from './container/products-page/products-page.component';

@NgModule({
    declarations: [ProductsPageComponent],
    imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
