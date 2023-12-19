import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComentaryComponent } from './card-comentary.component';

describe('CardComentaryComponent', () => {
  let component: CardComentaryComponent;
  let fixture: ComponentFixture<CardComentaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComentaryComponent]
    });
    fixture = TestBed.createComponent(CardComentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
