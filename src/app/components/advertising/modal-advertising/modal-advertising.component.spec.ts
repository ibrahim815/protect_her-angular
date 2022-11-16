import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdvertisingComponent } from './modal-advertising.component';

describe('ModalAdvertisingComponent', () => {
  let component: ModalAdvertisingComponent;
  let fixture: ComponentFixture<ModalAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdvertisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
