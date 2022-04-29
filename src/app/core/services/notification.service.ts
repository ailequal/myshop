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
   * @param time
   */
  show(message: string, time: number = 1.5): void {
    if (this.message) // TODO: The notification service should implement some sort of queue feature for multiple notifications.
      return; // Do not set a new message and setTimeout(), if a message is already being displayed.

    this.message = message;
    setTimeout(() => this.hide(), time * 1000);
  }

  /**
   * Hide the message.
   */
  hide(): void {
    this.message = null;
  }

}
