import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManPowerReportPageComponent } from './man-power-report-page.component';

describe('ManPowerReportPageComponent', () => {
  let component: ManPowerReportPageComponent;
  let fixture: ComponentFixture<ManPowerReportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManPowerReportPageComponent]
    });
    fixture = TestBed.createComponent(ManPowerReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
