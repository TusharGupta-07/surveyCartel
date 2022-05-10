import { TestBed } from '@angular/core/testing';

import { SurveyquestionService } from './surveyquestion.service';

describe('SurveyquestionService', () => {
  let service: SurveyquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
