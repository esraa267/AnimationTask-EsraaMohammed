import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Expiry',
})
export class ExpiryPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let date = new Date().toLocaleDateString().split('/').reverse();
    date[0] = date[0].substring(2);
    let temp = date[1];
    date[1] = date[2];
    date[2] = temp;

    return value.filter((product: any) => product.date > date.join('-'));
  }
}
