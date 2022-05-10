import { TestBed } from '@angular/core/testing';

import { BmicalcservService } from './bmicalcserv.service';

describe('BmicalcservService', () => {
  let service: BmicalcservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmicalcservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
