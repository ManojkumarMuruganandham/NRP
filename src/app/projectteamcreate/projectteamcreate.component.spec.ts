import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectteamcreateComponent } from './projectteamcreate.component';

describe('ProjectteamcreateComponent', () => {
  let component: ProjectteamcreateComponent;
  let fixture: ComponentFixture<ProjectteamcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectteamcreateComponent]
    });
    fixture = TestBed.createComponent(ProjectteamcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
