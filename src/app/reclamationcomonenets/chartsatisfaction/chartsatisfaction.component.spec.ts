import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsatisfactionComponent } from './chartsatisfaction.component';

describe('ChartsatisfactionComponent', () => {
  let component: ChartsatisfactionComponent;
  let fixture: ComponentFixture<ChartsatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsatisfactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
