import { IjpConnectionService } from './ijp-connection.service';
import { TestBed, inject } from '@angular/core/testing';

describe('IjpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IjpService]
    });
  });

  it('should be created', inject([IjpConnectionService], (service: IjpConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
