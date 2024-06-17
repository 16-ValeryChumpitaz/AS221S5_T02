import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgrammeInactivosComponent } from './study-programme-inactivos.component';

describe('StudyProgrammeInactivosComponent', () => {
  let component: StudyProgrammeInactivosComponent;
  let fixture: ComponentFixture<StudyProgrammeInactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyProgrammeInactivosComponent]
    });
    fixture = TestBed.createComponent(StudyProgrammeInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
