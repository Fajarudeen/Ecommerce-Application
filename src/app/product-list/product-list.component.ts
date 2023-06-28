import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productDetails:any
  search:any
  constructor(private api:ServicesService,private wlist:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe((result:any)=>{
    this.productDetails=result.product
    this.productDetails.forEach((item:any) => {
      Object.assign(item,{quantity:1,total:item.price})
    });
    }
    )

    this.api.searchTerm.subscribe((data)=>{
      this.search= data
    })
  }

  addTowishList(product:any){
    this.wlist.addTowList(product)
    alert('product added to wishlist')
  }

  addToCart(product:any){
    this.cartService.addToCart(product)
  }

}
