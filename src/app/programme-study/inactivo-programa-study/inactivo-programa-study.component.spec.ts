import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivoProgramaStudyComponent } from './inactivo-programa-study.component';

describe('InactivoProgramaStudyComponent', () => {
  let component: InactivoProgramaStudyComponent;
  let fixture: ComponentFixture<InactivoProgramaStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactivoProgramaStudyComponent]
    });
    fixture = TestBed.createComponent(InactivoProgramaStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
