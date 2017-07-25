import { PipeTransform, Pipe } from '@angular/core'
import { IProduct } from './product'

@Pipe({
    name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    /*transform(value: IProduct[], args: string[]): IProduct[]{
       let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
       return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }*/
        
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}