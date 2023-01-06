import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem=0

  constructor(private api:ServicesService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((data)=>{
      this.totalItem=data.length
    })
  }
  search(event:any){
    let searchValue=event.target.value
    console.log(searchValue);
       
    this.api.searchTerm.next(searchValue)
  }


}
