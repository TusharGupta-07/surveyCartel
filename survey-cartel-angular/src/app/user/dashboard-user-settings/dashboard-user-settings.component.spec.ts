import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSettingsComponent } from './dashboard-user-settings.component';

describe('DashboardUserSettingsComponent', () => {
  let component: DashboardUserSettingsComponent;
  let fixture: ComponentFixture<DashboardUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
