import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarStudyProgrammeComponent } from './agregar-study-programme.component';

describe('AgregarStudyProgrammeComponent', () => {
  let component: AgregarStudyProgrammeComponent;
  let fixture: ComponentFixture<AgregarStudyProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarStudyProgrammeComponent]
    });
    fixture = TestBed.createComponent(AgregarStudyProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
