import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisNewComponent } from './pais-new.component';

describe('PaisNewComponent', () => {
  let component: PaisNewComponent;
  let fixture: ComponentFixture<PaisNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisNewComponent]
    });
    fixture = TestBed.createComponent(PaisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
