import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = new BehaviorSubject([])

  cartItemListArray: any = []

  constructor() { }

  // to get cart item to cart component
  getProducts() {
    return this.cartItemList.asObservable()
  }

  addToCart(products: any) {
    this.cartItemListArray.push(products)
    this.cartItemList.next(this.cartItemListArray)
    this.getTotalPrice()
  }

  getTotalPrice() {
    let grandTotal = 0
    this.cartItemListArray.map((item: any) => {
      grandTotal += item.price
      console.log(grandTotal);
    })
    return grandTotal
  }

  // remove a single product detail from cart table
  removeItemCart(product: any) {
    this.cartItemListArray.map((item: any, index: any) => {
      if (product.id == item.id) {
        this.cartItemListArray.splice(index, 1)
      }
    })
    this.cartItemList.next(this.cartItemListArray)
  }

  // remove all item from cart
  removeAllCart(){
    this.cartItemListArray=[]
    this.cartItemList.next(this.cartItemListArray)
  }


}
