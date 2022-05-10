import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSurveyResultComponent } from './dashboard-survey-result.component';

describe('DashboardSurveyResultComponent', () => {
  let component: DashboardSurveyResultComponent;
  let fixture: ComponentFixture<DashboardSurveyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSurveyResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSurveyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
