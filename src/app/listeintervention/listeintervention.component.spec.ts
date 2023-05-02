import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinterventionComponent } from './listeintervention.component';

describe('ListeinterventionComponent', () => {
  let component: ListeinterventionComponent;
  let fixture: ComponentFixture<ListeinterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
