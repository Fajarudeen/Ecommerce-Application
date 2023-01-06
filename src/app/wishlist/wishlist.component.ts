import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

wishList:any

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if (localStorage.getItem("wishlist")) {
      this.wishList=JSON.parse(localStorage.getItem("wishlist"))
      console.log(this.wishList);
    }
  }
  removeItem(product:any){
    let removeItemList = this.wishList.filter((item:any)=>item.id!=product.id)
    console.log(removeItemList);
    localStorage.setItem("wishlist",JSON.stringify(removeItemList))
    this.wishList=JSON.parse(localStorage.getItem("wishlist"))
  }

  addToCart(product:any){
    this.cartService.addToCart(product)
    this.removeItem(product)
  }

}
