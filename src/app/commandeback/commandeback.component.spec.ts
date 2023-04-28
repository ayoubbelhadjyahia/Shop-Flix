import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandebackComponent } from './commandeback.component';

describe('CommandebackComponent', () => {
  let component: CommandebackComponent;
  let fixture: ComponentFixture<CommandebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
