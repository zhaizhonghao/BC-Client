import { TestBed } from '@angular/core/testing';

import { HlfService } from './hlf.service';

describe('HlfService', () => {
  let service: HlfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HlfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
