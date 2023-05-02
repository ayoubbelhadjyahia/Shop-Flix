import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundBackComponent } from './not-found-back.component';

describe('NotFoundBackComponent', () => {
  let component: NotFoundBackComponent;
  let fixture: ComponentFixture<NotFoundBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
