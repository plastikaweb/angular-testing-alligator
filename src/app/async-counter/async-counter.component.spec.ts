import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { AsyncCounterComponent } from './async-counter.component';
import { AsyncIncrementDecrementService } from '../services/async-increment-decrement/async-increment-decrement.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AsyncCounterComponent', () => {
  let component: AsyncCounterComponent;
  let fixture: ComponentFixture<AsyncCounterComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncCounterComponent],
      providers: [AsyncIncrementDecrementService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCounterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment after 5 seconds', fakeAsync(() => {
    debugEl.query(By.css('.increment')).triggerEventHandler('click', null);
    flush();
    fixture.detectChanges();
    const value = debugEl.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  }));
});
