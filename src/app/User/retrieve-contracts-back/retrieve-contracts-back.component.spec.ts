import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveContractsBackComponent } from './retrieve-contracts-back.component';

describe('RetrieveContractsBackComponent', () => {
  let component: RetrieveContractsBackComponent;
  let fixture: ComponentFixture<RetrieveContractsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveContractsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveContractsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
