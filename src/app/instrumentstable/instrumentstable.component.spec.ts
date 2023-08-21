import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentstableComponent } from './instrumentstable.component';

describe('InstrumentstableComponent', () => {
  let component: InstrumentstableComponent;
  let fixture: ComponentFixture<InstrumentstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentstableComponent]
    });
    fixture = TestBed.createComponent(InstrumentstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
