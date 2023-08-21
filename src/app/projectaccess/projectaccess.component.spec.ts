import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaccessComponent } from './projectaccess.component';

describe('ProjectaccessComponent', () => {
  let component: ProjectaccessComponent;
  let fixture: ComponentFixture<ProjectaccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectaccessComponent]
    });
    fixture = TestBed.createComponent(ProjectaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
