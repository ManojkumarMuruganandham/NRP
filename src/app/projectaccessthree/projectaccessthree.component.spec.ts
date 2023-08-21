import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaccessthreeComponent } from './projectaccessthree.component';

describe('ProjectaccessthreeComponent', () => {
  let component: ProjectaccessthreeComponent;
  let fixture: ComponentFixture<ProjectaccessthreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectaccessthreeComponent]
    });
    fixture = TestBed.createComponent(ProjectaccessthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
