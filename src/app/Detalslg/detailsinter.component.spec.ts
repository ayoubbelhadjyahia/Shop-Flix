import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsinterComponent } from './detailsinter.component';

describe('DetailsinterComponent', () => {
  let component: DetailsinterComponent;
  let fixture: ComponentFixture<DetailsinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
