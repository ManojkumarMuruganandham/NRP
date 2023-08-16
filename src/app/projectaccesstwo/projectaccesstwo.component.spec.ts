import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaccesstwoComponent } from './projectaccesstwo.component';

describe('ProjectaccesstwoComponent', () => {
  let component: ProjectaccesstwoComponent;
  let fixture: ComponentFixture<ProjectaccesstwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectaccesstwoComponent]
    });
    fixture = TestBed.createComponent(ProjectaccesstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
