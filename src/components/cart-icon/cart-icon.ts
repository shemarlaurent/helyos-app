import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CartIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cart-icon',
  templateUrl: 'cart-icon.html'
})
export class CartIconComponent {
@Output() openCart = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello CartIconComponent Component');
    this.text = 'Hello World';
  }

  toggleCart() {
    this.openCart.emit('open-cart')
  }
}
