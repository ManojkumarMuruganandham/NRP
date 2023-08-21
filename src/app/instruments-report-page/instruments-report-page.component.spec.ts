import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsReportPageComponent } from './instruments-report-page.component';

describe('InstrumentsReportPageComponent', () => {
  let component: InstrumentsReportPageComponent;
  let fixture: ComponentFixture<InstrumentsReportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentsReportPageComponent]
    });
    fixture = TestBed.createComponent(InstrumentsReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
