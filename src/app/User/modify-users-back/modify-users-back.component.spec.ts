import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUsersBackComponent } from './modify-users-back.component';

describe('ModifyUsersBackComponent', () => {
  let component: ModifyUsersBackComponent;
  let fixture: ComponentFixture<ModifyUsersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUsersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUsersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
