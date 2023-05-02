import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLivraisonsfrontComponent } from './all-livraisonsfront.component';

describe('AllLivraisonsfrontComponent', () => {
  let component: AllLivraisonsfrontComponent;
  let fixture: ComponentFixture<AllLivraisonsfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLivraisonsfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLivraisonsfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
