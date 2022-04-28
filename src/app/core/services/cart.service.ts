import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {CartItem} from '../../model/cart-item';
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  /**
   * The constructor method.
   */
  constructor(
    public notificationService: NotificationService
  ) {
  }

  addItem(itemToAdd: Product, selectedColor: string | null): void {
    if (!selectedColor)
      return;

    this.items = [...this.items, {product: itemToAdd, quantity: 1, color: selectedColor}]

    this.notificationService.show('Product added to the cart.');
  }

  removeItem(itemToRemove: CartItem): void {
    this.items = this.items.filter(item => {
      return !(item.product.id === itemToRemove.product.id && item.color === itemToRemove.color);
    })

    this.notificationService.show('Product removed from the cart');
  }

  incrementQuantity(itemToUpdate: CartItem): void {
    console.log(itemToUpdate)
  }

  decrementQuantity(itemToUpdate: CartItem): void {
    console.log(itemToUpdate)
  }

  orderNow(formData: any): void {
    console.log(formData, this.items)
  }

  getTotalCartAmount(): number {
    return this.items.reduce((total, item) => {
      return total + (item.quantity * item.product.price)
    }, 0)
  }

  getTotalQty(): number {
    return this.items.length
  }

  logItems(): void {
    console.log(this.items)
  }

}
