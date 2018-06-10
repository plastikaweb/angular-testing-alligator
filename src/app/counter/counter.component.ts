import { Component } from '@angular/core';
import { IncrementDecrementService } from '../services/increment-decrement/increment-decrement.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(private incrementDecrementService: IncrementDecrementService) { }

  getValue() {
    return this.incrementDecrementService.getValue();
  }

  increment() {
    this.incrementDecrementService.increment();
  }

  decrement() {
    this.incrementDecrementService.decrement();
  }

  limitReached() {
    return this.incrementDecrementService.minimumOrMaximumReached();
  }

}
