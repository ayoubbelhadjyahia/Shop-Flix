import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslgComponent } from './detailslg.component';

describe('DetailslgComponent', () => {
  let component: DetailslgComponent;
  let fixture: ComponentFixture<DetailslgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailslgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
