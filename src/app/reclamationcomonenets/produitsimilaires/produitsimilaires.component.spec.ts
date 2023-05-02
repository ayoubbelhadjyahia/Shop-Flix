import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsimilairesComponent } from './produitsimilaires.component';

describe('ProduitsimilairesComponent', () => {
  let component: ProduitsimilairesComponent;
  let fixture: ComponentFixture<ProduitsimilairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsimilairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsimilairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
