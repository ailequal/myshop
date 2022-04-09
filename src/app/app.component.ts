import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <button #buttonRef class="btn btn-primary">
      <i class="fab fa-shopify"></i>
    </button>
  `,
})
export class AppComponent {

  // The ViewChild decorator is retrieving the buttonRef from the template HTML
  // and setting it as a property for this class. The generic ElementRef is assigned
  // as HTMLButtonElement or undefined, since until the component is fully rendered,
  // we won't be able to access the property for real.
  @ViewChild('buttonRef') buttonInput: ElementRef<HTMLButtonElement> | undefined;

  constructor() {
    console.log(this.buttonInput?.constructor?.name)
    console.log(this.buttonInput) // At the start is undefined.
    console.log(this.buttonInput?.nativeElement) // Same of course.

    setTimeout(() => {
      // When the component is fully rendered, we have our property ready to used.
      console.log(this.buttonInput?.constructor?.name)
      console.log(this.buttonInput?.nativeElement)
    }, 3000)
  }

}
