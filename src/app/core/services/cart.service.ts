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

    // Check if the item (product and color pair) has been already added to the cart.
    const itemFound: CartItem | undefined = this.items.find(item => {
      return item.product.id === itemToAdd.id && item.color === selectedColor
    });

    if (itemFound) {
      // The pair already exists: increment the quantity.
      this.incrementQuantity(itemFound);
      return;
    }

    // The pair does not exist yet: add it to the cart once.
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
    if (itemToUpdate.quantity >= 5) {
      this.notificationService.show('Max product quantity added.');
      return;
    }

    if (!this.items.length) {
      this.items = [itemToUpdate]
      return;
    }

    this.items = this.items.map(item => {
      if (item.product.id !== itemToUpdate.product.id || item.color !== itemToUpdate.color)
        return item

      return {...item, quantity: ++item.quantity}
    })

    this.notificationService.show('Incremented product quantity.');
  }

  decrementQuantity(itemToUpdate: CartItem): void {
    if (itemToUpdate.quantity <= 1) {
      this.notificationService.show('Minimum product quantity added.');
      return;
    }

    if (!this.items.length)
      return;

    this.items = this.items.map(item => {
      if (item.product.id !== itemToUpdate.product.id || item.color !== itemToUpdate.color)
        return item

      return {...item, quantity: --item.quantity}
    })

    this.notificationService.show('Decremented product quantity.');
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
