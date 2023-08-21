import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryReportPageComponent } from './machinery-report-page.component';

describe('MachineryReportPageComponent', () => {
  let component: MachineryReportPageComponent;
  let fixture: ComponentFixture<MachineryReportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineryReportPageComponent]
    });
    fixture = TestBed.createComponent(MachineryReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
