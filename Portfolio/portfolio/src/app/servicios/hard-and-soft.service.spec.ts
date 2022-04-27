import { TestBed } from '@angular/core/testing';

import { HardAndSoftService } from './hard-and-soft.service';

describe('HardAndSoftService', () => {
  let service: HardAndSoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardAndSoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
