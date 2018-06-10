import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IncrementDecrementService } from '../services/increment-decrement/increment-decrement.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugEl: DebugElement;
  let incrementDecrementService: IncrementDecrementService;
  let minimumOrMaximumSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [IncrementDecrementService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    incrementDecrementService = debugEl.injector.get(IncrementDecrementService);
    fixture.detectChanges();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should increment/decrement in template', () => {
    // increment
    debugEl.query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const value = debugEl.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');

    // decrement
    debugEl.query(By.css('button.decrement'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const value2 = debugEl.query(By.css('h1')).nativeElement.innerText;
    expect(value2).toEqual('0');
  });

  it(`should show 'Limit reached' message`, () => {
    minimumOrMaximumSpy =
    spyOn(incrementDecrementService, 'minimumOrMaximumReached').and.returnValue(true);
    fixture.detectChanges();
    const message = debugEl.query(By.css('p.message')).nativeElement.innerText;

    expect(message).toContain('Limit reached');
  });

});
