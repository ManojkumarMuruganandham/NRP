import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyReportPageComponent } from './safety-report-page.component';

describe('SafetyReportPageComponent', () => {
  let component: SafetyReportPageComponent;
  let fixture: ComponentFixture<SafetyReportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyReportPageComponent]
    });
    fixture = TestBed.createComponent(SafetyReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
