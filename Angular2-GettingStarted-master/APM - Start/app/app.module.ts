import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-list.pipe'
import { SharedModule } from './shared/shared.module'
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule , FormsModule, SharedModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
