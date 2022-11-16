import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackPotComponent } from './jack-pot.component';

describe('JackPotComponent', () => {
  let component: JackPotComponent;
  let fixture: ComponentFixture<JackPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackPotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
