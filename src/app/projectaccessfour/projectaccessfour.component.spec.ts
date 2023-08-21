import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaccessfourComponent } from './projectaccessfour.component';

describe('ProjectaccessfourComponent', () => {
  let component: ProjectaccessfourComponent;
  let fixture: ComponentFixture<ProjectaccessfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectaccessfourComponent]
    });
    fixture = TestBed.createComponent(ProjectaccessfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
