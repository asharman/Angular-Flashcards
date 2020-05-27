import { TestBed } from '@angular/core/testing';

import { FlashhttpService } from './flashhttp.service';

describe('FlashhttpService', () => {
  let service: FlashhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
