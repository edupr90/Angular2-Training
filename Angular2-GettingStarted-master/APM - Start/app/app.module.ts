import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component'
import { ProductFilterPipe } from './products/product-list.pipe'
import { ProductDetail } from './products/product-detail.component'

import { WelcomeComponent } from './home/welcome.component'

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module'
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule , FormsModule, SharedModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, ProductDetail, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
