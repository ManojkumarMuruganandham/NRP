import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcodeComponent } from './projectcode.component';

describe('ProjectcodeComponent', () => {
  let component: ProjectcodeComponent;
  let fixture: ComponentFixture<ProjectcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectcodeComponent]
    });
    fixture = TestBed.createComponent(ProjectcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
