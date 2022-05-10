import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMysurveysComponent } from './dashboard-mysurveys.component';

describe('DashboardMysurveysComponent', () => {
  let component: DashboardMysurveysComponent;
  let fixture: ComponentFixture<DashboardMysurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMysurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMysurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
