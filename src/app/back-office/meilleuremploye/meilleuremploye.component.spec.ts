import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleuremployeComponent } from './meilleuremploye.component';

describe('MeilleuremployeComponent', () => {
  let component: MeilleuremployeComponent;
  let fixture: ComponentFixture<MeilleuremployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleuremployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleuremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
