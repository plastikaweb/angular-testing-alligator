import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTitleComponent } from './set-title.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SetTitleComponent', () => {
  let component: SetTitleComponent;
  let fixture: ComponentFixture<SetTitleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetTitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTitleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', async(() => {
    debugEl.query(By.css('.set-title')).triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugEl.query(By.css('h1')).nativeElement.innerText;
      expect(value).toBe('Crazzy!!!!');
    });
  }));
});
