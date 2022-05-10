import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordShowOnlyQuestionComponent } from './dashbaord-show-only-question.component';

describe('DashbaordShowOnlyQuestionComponent', () => {
  let component: DashbaordShowOnlyQuestionComponent;
  let fixture: ComponentFixture<DashbaordShowOnlyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordShowOnlyQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordShowOnlyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
