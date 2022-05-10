import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesurveyquestionComponent } from './createsurveyquestion.component';

describe('CreatesurveyquestionComponent', () => {
  let component: CreatesurveyquestionComponent;
  let fixture: ComponentFixture<CreatesurveyquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesurveyquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesurveyquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
