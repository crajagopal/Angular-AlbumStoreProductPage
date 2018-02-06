import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { RoutesRecognized } from '@angular/router/src/events';

import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component'

const appRoutes: Routes = [
  {path:'products', component: ProductListComponent },
  {path:'products/:id', component: ProductPageComponent },    
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],  
  exports: [RouterModule]
})
export class ProductRoutingModule { }