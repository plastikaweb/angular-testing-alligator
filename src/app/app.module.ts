import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
