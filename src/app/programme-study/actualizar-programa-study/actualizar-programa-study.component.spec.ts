import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProgramaStudyComponent } from './actualizar-programa-study.component';

describe('ActualizarProgramaStudyComponent', () => {
  let component: ActualizarProgramaStudyComponent;
  let fixture: ComponentFixture<ActualizarProgramaStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarProgramaStudyComponent]
    });
    fixture = TestBed.createComponent(ActualizarProgramaStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
