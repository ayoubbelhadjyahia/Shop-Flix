import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbackComponent } from './cartback.component';

describe('CartbackComponent', () => {
  let component: CartbackComponent;
  let fixture: ComponentFixture<CartbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
