import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementDecrementService {
  value = 0;
  message: string;

  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'maximum reached!';
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'minimum reached!';
    }
  }

  minimumOrMaximumReached() {
    return !!(this.message && this.message.length); // will return true or false
  }

  getValue() {
    return this.value;
  }
}
