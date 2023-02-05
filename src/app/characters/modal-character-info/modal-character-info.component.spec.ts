import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharacterInfoComponent } from './modal-character-info.component';

describe('ModalCharacterInfoComponent', () => {
  let component: ModalCharacterInfoComponent;
  let fixture: ComponentFixture<ModalCharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCharacterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
