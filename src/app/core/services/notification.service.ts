import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message: string | null = null;

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * Show the message.
   *
   * @param message
   */
  show(message: string): void {
    this.message = message;
    setTimeout(() => this.hide(), 3000);
  }

  /**
   * Hide the message.
   */
  hide(): void {
    this.message = null;
  }

}
