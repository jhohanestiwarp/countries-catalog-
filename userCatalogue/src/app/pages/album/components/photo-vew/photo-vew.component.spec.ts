import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVewComponent } from './photo-vew.component';

describe('PhotoVewComponent', () => {
  let component: PhotoVewComponent;
  let fixture: ComponentFixture<PhotoVewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoVewComponent]
    });
    fixture = TestBed.createComponent(PhotoVewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
