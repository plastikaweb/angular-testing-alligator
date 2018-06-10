import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SetTitleComponent } from './set-title/set-title.component';
import { AsyncCounterComponent } from './async-counter/async-counter.component';
import { AsyncIncrementDecrementService } from './services/async-increment-decrement/async-increment-decrement.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CounterComponent, SetTitleComponent, AsyncCounterComponent
      ],
      providers: [AsyncIncrementDecrementService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
