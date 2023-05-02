import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveMarketsBackComponent } from './retrieve-markets-back.component';

describe('RetrieveMarketsBackComponent', () => {
  let component: RetrieveMarketsBackComponent;
  let fixture: ComponentFixture<RetrieveMarketsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveMarketsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveMarketsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
