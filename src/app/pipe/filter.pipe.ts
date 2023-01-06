import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productList: any[],filterString:string,propName:any):any[]{
    const result:any=[]
    if (!productList|| filterString=='' ||propName=='') {
      return productList
    }
    productList.forEach((product:any)=>{
      if (product[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(product)
      }
    })
    return result;
  }

}
