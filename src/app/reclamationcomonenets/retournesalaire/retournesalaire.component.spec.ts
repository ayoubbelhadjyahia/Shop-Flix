import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetournesalaireComponent } from './retournesalaire.component';

describe('RetournesalaireComponent', () => {
  let component: RetournesalaireComponent;
  let fixture: ComponentFixture<RetournesalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetournesalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetournesalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
