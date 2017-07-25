import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { ProductListComponent} from './product-list.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations:[ 
        ProductListComponent
    ],
    bootstrap: [ ProductListComponent ]
})
export class ProductModule { }