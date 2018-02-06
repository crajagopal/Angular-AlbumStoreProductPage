import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { RoutesRecognized } from '@angular/router/src/events';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {path:'', redirectTo: '/products', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }