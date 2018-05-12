import { TestBed, inject } from '@angular/core/testing';

import { CloukitDropoutService } from './dropout.service';

describe('DropoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloukitDropoutService]
    });
  });

  it('should be created', inject([CloukitDropoutService], (service: CloukitDropoutService) => {
    expect(service).toBeTruthy();
  }));
});
