import { TestBed, inject } from '@angular/core/testing';

import { AsyncIncrementDecrementService } from './async-increment-decrement.service';

describe('AsyncIncrementDecrementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncIncrementDecrementService]
    });
  });

  it('should be created', inject([AsyncIncrementDecrementService], (service: AsyncIncrementDecrementService) => {
    expect(service).toBeTruthy();
  }));
});
