import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectteamtwoComponent } from './projectteamtwo.component';

describe('ProjectteamtwoComponent', () => {
  let component: ProjectteamtwoComponent;
  let fixture: ComponentFixture<ProjectteamtwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectteamtwoComponent]
    });
    fixture = TestBed.createComponent(ProjectteamtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
