import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsdataComponent } from './questionsdata.component';

describe('QuestionsdataComponent', () => {
  let component: QuestionsdataComponent;
  let fixture: ComponentFixture<QuestionsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
