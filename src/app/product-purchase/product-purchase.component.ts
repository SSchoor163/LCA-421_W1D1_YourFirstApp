import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import {total} from '../purchase';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.css']
})
export class ProductPurchaseComponent implements OnInit {
  @Input() product;
  total=total;
//price = pro
  constructor() { }

  ngOnInit() {
  }

  purchase (){
    this.total.number += this.product.price;
   // total = this.total;
    console.log(total.number);
    
  }
}
