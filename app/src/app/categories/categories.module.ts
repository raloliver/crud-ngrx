/*
 * File: categories.module.ts
 * Project: crud-ngrx
 * Created: Thursday, January 6th 2022, 6:50:47 pm
 * Last Modified: Thursday, January 6th 2022, 9:11:34 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesPageComponent} from './container/categories-page/categories-page.component';
import {CategoryEditPageComponent} from './container/category-edit-page/category-edit-page.component';

@NgModule({
    declarations: [CategoriesPageComponent, CategoryEditPageComponent],
    imports: [CommonModule, SharedModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
