import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinarytableComponent } from './machinarytable.component';

describe('MachinarytableComponent', () => {
  let component: MachinarytableComponent;
  let fixture: ComponentFixture<MachinarytableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinarytableComponent]
    });
    fixture = TestBed.createComponent(MachinarytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
