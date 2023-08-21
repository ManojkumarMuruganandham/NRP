import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerTableComponent } from './manpower-table.component';

describe('ManpowerTableComponent', () => {
  let component: ManpowerTableComponent;
  let fixture: ComponentFixture<ManpowerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManpowerTableComponent]
    });
    fixture = TestBed.createComponent(ManpowerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
