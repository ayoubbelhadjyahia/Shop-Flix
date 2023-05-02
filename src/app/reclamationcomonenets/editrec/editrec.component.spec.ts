import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecComponent } from './editrec.component';

describe('EditrecComponent', () => {
  let component: EditrecComponent;
  let fixture: ComponentFixture<EditrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
