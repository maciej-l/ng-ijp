import { TestBed, inject } from '@angular/core/testing';

import { IjpService } from './ijp.service';

describe('IjpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IjpService]
    });
  });

  it('should be created', inject([IjpService], (service: IjpService) => {
    expect(service).toBeTruthy();
  }));
});
