/*
 * File: products.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 7:45:15 pm
 * Last Modified: Wednesday, September 15th 2021, 8:17:35 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsPageComponent} from './container/products-page/products-page.component';
import {SharedModule} from '../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
    declarations: [ProductsPageComponent],
    imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
