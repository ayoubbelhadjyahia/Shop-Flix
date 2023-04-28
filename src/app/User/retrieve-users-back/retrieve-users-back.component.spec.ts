import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveUsersBackComponent } from './retrieve-users-back.component';

describe('ClientsBackComponent', () => {
  let component: RetrieveUsersBackComponent;
  let fixture: ComponentFixture<RetrieveUsersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveUsersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveUsersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
