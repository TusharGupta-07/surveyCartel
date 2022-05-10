import { TestBed } from '@angular/core/testing';

import { AboutformService } from './aboutform.service';

describe('AboutformService', () => {
  let service: AboutformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
