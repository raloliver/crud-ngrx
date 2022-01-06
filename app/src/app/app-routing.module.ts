/*
 * File: app-routing.module.ts
 * Project: crud-ngrx
 * Created: Wednesday, September 15th 2021, 6:52:04 pm
 * Last Modified: Thursday, January 6th 2022, 6:53:29 pm
 * Copyright © 2021 AMDE Agência
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./products/products.module').then((m) => m.ProductsModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('./categories/categories.module').then(
                (m) => m.CategoriesModule
            ),
    },
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
