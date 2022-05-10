import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboutsurveyComponent } from './createaboutsurvey.component';

describe('CreateaboutsurveyComponent', () => {
  let component: CreateaboutsurveyComponent;
  let fixture: ComponentFixture<CreateaboutsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaboutsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboutsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
