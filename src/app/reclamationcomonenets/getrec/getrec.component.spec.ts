import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrecComponent } from './getrec.component';

describe('GetrecComponent', () => {
  let component: GetrecComponent;
  let fixture: ComponentFixture<GetrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
