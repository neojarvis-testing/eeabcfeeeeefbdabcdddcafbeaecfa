// app/my-component/my-component.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  // Property with TypeScript type
  message: string = 'Hello, Angular!';

  // Array of items
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor() { }

  ngOnInit(): void {
    // Method call with TypeScript type
    this.logMessage(this.message);

    // Method call with array iteration
    this.items.forEach(item => {
      this.logMessage(item);
    });
  }

  // Custom method with TypeScript type
  logMessage(message: string): void {
    console.log(message);
  }
}
