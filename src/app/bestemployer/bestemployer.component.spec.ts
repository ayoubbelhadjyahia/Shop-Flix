import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestemployerComponent } from './bestemployer.component';

describe('BestemployerComponent', () => {
  let component: BestemployerComponent;
  let fixture: ComponentFixture<BestemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
