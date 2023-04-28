import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackproductComponent } from './backproduct.component';

describe('BackproductComponent', () => {
  let component: BackproductComponent;
  let fixture: ComponentFixture<BackproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
