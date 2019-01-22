import { TestBed } from '@angular/core/testing';

import { ReceptenService } from './recepten.service';

describe('ReceptenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceptenService = TestBed.get(ReceptenService);
    expect(service).toBeTruthy();
  });
});
