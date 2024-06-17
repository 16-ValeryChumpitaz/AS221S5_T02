import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgrammeComponent } from './study-programme.component';

describe('StudyProgrammeComponent', () => {
  let component: StudyProgrammeComponent;
  let fixture: ComponentFixture<StudyProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyProgrammeComponent]
    });
    fixture = TestBed.createComponent(StudyProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
