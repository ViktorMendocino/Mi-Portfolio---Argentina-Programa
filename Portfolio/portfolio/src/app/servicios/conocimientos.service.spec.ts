import { TestBed } from '@angular/core/testing';

import { ConocimientosService } from './conocimientos.service';

describe('ConocimientosService', () => {
  let service: ConocimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConocimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
