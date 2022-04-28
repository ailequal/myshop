import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from './notification.service';
import {CartItem} from '../model/cart-item';
import {Product} from '../../shared/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  /**
   * The constructor method.
   */
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
  }

  addItem(itemToAdd: Product, selectedColor: string | null): void {
    console.log(itemToAdd, selectedColor)
  }

  removeItem(itemToRemove: CartItem): void {
    console.log(itemToRemove)
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
    return 0;
  }

}
