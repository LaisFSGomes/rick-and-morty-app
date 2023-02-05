import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocationInfoComponent } from './modal-location-info.component';

describe('ModalLocationInfoComponent', () => {
  let component: ModalLocationInfoComponent;
  let fixture: ComponentFixture<ModalLocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLocationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
