import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-hero',
  template: `
    <p>
      hero works!
    </p>
  `,
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
