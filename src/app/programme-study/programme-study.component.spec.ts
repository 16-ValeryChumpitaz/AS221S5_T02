import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeStudyComponent } from './programme-study.component';

describe('ProgrammeStudyComponent', () => {
  let component: ProgrammeStudyComponent;
  let fixture: ComponentFixture<ProgrammeStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeStudyComponent]
    });
    fixture = TestBed.createComponent(ProgrammeStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
