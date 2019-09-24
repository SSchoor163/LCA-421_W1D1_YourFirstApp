import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCalculatorComponent } from './shopping-cart-calculator.component';

describe('ShoppingCartCalculatorComponent', () => {
  let component: ShoppingCartCalculatorComponent;
  let fixture: ComponentFixture<ShoppingCartCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
