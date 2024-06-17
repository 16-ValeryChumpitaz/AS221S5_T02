import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarStudyProgrammeComponent } from './actualizar-study-programme.component';

describe('ActualizarStudyProgrammeComponent', () => {
  let component: ActualizarStudyProgrammeComponent;
  let fixture: ComponentFixture<ActualizarStudyProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarStudyProgrammeComponent]
    });
    fixture = TestBed.createComponent(ActualizarStudyProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
