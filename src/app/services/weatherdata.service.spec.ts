import { TestBed } from '@angular/core/testing';

import { WeatherdataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherdataService = TestBed.get(WeatherdataService);
    expect(service).toBeTruthy();
  });
});
