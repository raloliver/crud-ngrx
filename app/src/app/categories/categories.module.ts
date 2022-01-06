/*
 * File: categories.module.ts
 * Project: crud-ngrx
 * Created: Thursday, January 6th 2022, 6:50:47 pm
 * Last Modified: Thursday, January 6th 2022, 6:51:24 pm
 * Copyright © 2021 AMDE Agência
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './container/categories-page/categories-page.component';


@NgModule({
  declarations: [
    CategoriesPageComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
