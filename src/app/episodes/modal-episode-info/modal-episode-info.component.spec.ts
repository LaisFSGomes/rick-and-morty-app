import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEpisodeInfoComponent } from './modal-episode-info.component';

describe('ModalEpisodeInfoComponent', () => {
  let component: ModalEpisodeInfoComponent;
  let fixture: ComponentFixture<ModalEpisodeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEpisodeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEpisodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
