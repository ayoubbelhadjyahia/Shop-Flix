import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinterventionComponent } from './editintervention.component';

describe('EditinterventionComponent', () => {
  let component: EditinterventionComponent;
  let fixture: ComponentFixture<EditinterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
