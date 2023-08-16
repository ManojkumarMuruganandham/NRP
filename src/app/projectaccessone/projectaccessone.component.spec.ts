import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaccessoneComponent } from './projectaccessone.component';

describe('ProjectaccessoneComponent', () => {
  let component: ProjectaccessoneComponent;
  let fixture: ComponentFixture<ProjectaccessoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectaccessoneComponent]
    });
    fixture = TestBed.createComponent(ProjectaccessoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
