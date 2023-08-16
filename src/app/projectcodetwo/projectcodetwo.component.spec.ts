import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcodetwoComponent } from './projectcodetwo.component';

describe('ProjectcodetwoComponent', () => {
  let component: ProjectcodetwoComponent;
  let fixture: ComponentFixture<ProjectcodetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectcodetwoComponent]
    });
    fixture = TestBed.createComponent(ProjectcodetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
