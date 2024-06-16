import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProgramaStudyComponent } from './agregar-programa-study.component';

describe('AgregarProgramaStudyComponent', () => {
  let component: AgregarProgramaStudyComponent;
  let fixture: ComponentFixture<AgregarProgramaStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProgramaStudyComponent]
    });
    fixture = TestBed.createComponent(AgregarProgramaStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
