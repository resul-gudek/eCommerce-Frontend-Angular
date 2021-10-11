import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
//filterText varsa filterText kücük harfe cevir
    filterText = filterText?filterText.toLocaleLowerCase():""
// product filter yapmak için ürün isimlerini kücük harflere cevirdik ve filter ile tek tek dolasarak buluyoruz.
// ürünleri tek tek dolasıyor varsa array ekliyor.    
return filterText?value
    .filter((p:Product) =>p.productName.toLocaleLowerCase()
    .indexOf(filterText)!==-1 ):value;
  }

}
