import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLivreurComponent } from './all-livreur.component';

describe('AllLivreurComponent', () => {
  let component: AllLivreurComponent;
  let fixture: ComponentFixture<AllLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
