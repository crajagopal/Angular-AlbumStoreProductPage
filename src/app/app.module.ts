import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductService } from './product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,              
    PageNotFoundComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    AppRoutingModule    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
