import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturebackComponent } from './factureback.component';

describe('FacturebackComponent', () => {
  let component: FacturebackComponent;
  let fixture: ComponentFixture<FacturebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
