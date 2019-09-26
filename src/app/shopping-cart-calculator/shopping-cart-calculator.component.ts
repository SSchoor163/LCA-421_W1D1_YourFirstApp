import { Component, OnInit, Input } from '@angular/core';
import{total} from '../purchase';
import { debug } from 'util';

@Component({
  selector: 'app-shopping-cart-calculator',
  templateUrl: './shopping-cart-calculator.component.html',
  styleUrls: ['./shopping-cart-calculator.component.css']
})
export class ShoppingCartCalculatorComponent implements OnInit {
  
  constructor() {
    
   }
   total=total;
   lastPurchase = 0;
   
  ngOnInit() {
    
  }
  sum(){
    debugger;

   
    return this.total;
  }
 
}
