import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTacklesPageComponent } from './tools-tackles-page.component';

describe('ToolsTacklesPageComponent', () => {
  let component: ToolsTacklesPageComponent;
  let fixture: ComponentFixture<ToolsTacklesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsTacklesPageComponent]
    });
    fixture = TestBed.createComponent(ToolsTacklesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
