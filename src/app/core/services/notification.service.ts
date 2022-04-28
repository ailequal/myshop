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
    if (this.message) // TODO: The notification service should implement some sort of queue feature for multiple notifications.
      return; // Do not set a new message and setTimeout(), if a message is already being displayed.

    this.message = message;
    setTimeout(() => this.hide(), 1500);
  }

  /**
   * Hide the message.
   */
  hide(): void {
    this.message = null;
  }

}
