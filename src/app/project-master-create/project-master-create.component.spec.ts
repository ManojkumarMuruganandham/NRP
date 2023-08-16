import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMasterCreateComponent } from './project-master-create.component';

describe('ProjectMasterCreateComponent', () => {
  let component: ProjectMasterCreateComponent;
  let fixture: ComponentFixture<ProjectMasterCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMasterCreateComponent]
    });
    fixture = TestBed.createComponent(ProjectMasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
