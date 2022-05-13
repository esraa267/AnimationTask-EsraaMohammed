import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchWord?: string): any {
    if (!value || !searchWord) {
      return value;
    } 

     return value.filter((product: any) => product.category === searchWord);
  }
}
