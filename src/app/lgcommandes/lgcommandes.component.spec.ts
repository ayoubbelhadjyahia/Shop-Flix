import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgcommandesComponent } from './lgcommandes.component';

describe('LgcommandesComponent', () => {
  let component: LgcommandesComponent;
  let fixture: ComponentFixture<LgcommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgcommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgcommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
