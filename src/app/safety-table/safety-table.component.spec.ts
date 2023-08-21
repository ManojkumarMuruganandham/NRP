import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyTableComponent } from './safety-table.component';

describe('SafetyTableComponent', () => {
  let component: SafetyTableComponent;
  let fixture: ComponentFixture<SafetyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyTableComponent]
    });
    fixture = TestBed.createComponent(SafetyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
