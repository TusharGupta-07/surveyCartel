import { TestBed } from '@angular/core/testing';

import { AboutsurveyquestiondataService } from './aboutsurveyquestiondata.service';

describe('AboutsurveyquestiondataService', () => {
  let service: AboutsurveyquestiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutsurveyquestiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
