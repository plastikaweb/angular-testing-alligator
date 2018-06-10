import { Component } from '@angular/core';
import { AsyncIncrementDecrementService } from '../services/async-increment-decrement/async-increment-decrement.service';

@Component({
  selector: 'app-async-counter',
  template: `
  <h1>
  {{ incrementDecrement.value }}
  </h1>

  <button (click)="increment()" class="increment">
  Increment
  </button>
  `
})
export class AsyncCounterComponent {

  constructor(private incrementDecrement: AsyncIncrementDecrementService) { }
  increment() {
    this.incrementDecrement.increment();
  }
}
