import { TestBed } from '@angular/core/testing';

import { AboutsurveydataService } from './aboutsurveydata.service';

describe('AboutsurveydataService', () => {
  let service: AboutsurveydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutsurveydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
