import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[]
  totalPrice=0

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
      this.products=data
    })
    this.totalPrice=this.cartService.getTotalPrice()
  }

  removeItemCart(item:any){
    this.cartService.removeItemCart(item)
    this.totalPrice=this.cartService.getTotalPrice()
  }

  removeAllItem(){
    this.cartService.removeAllCart()
  }
  
  // checkout - apply 10% when cart is more than 3 items
  checkout(){
    if (this.products.length>=3) {
      // apply 10% discount on total prize
      let discount = (this.totalPrice*10)/100
      let discountPrice = this.totalPrice - discount
      alert('Your order is confirmed and total price after discount is:'+Math.floor(discountPrice))
      this.removeAllItem()
      this.router.navigateByUrl('')
    }
    else{
      alert('Your order is confirmed and total price is:'+Math.floor(this.totalPrice))
      this.removeAllItem()
      this.router.navigateByUrl('')

    }
  }
}
