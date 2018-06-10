import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { SetTitleComponent } from './set-title/set-title.component';
import { AsyncCounterComponent } from './async-counter/async-counter.component';
import { IncrementDecrementService } from './services/increment-decrement/increment-decrement.service';
import { AsyncIncrementDecrementService } from './services/async-increment-decrement/async-increment-decrement.service';

@NgModule({
  declarations: [AppComponent, CounterComponent, SetTitleComponent, AsyncCounterComponent],
  imports: [CommonModule, BrowserModule],
  providers: [IncrementDecrementService, AsyncIncrementDecrementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
