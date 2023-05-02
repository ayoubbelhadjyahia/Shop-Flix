import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinterventionComponent } from './addintervention.component';

describe('AddinterventionComponent', () => {
  let component: AddinterventionComponent;
  let fixture: ComponentFixture<AddinterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
