import { TestBed } from '@angular/core/testing';

import { ViService } from './vi.service';

describe('ViService', () => {
  let service: ViService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
