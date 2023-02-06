import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesCardComponent } from './episodes-card.component';

describe('EpisodesCardComponent', () => {
  let component: EpisodesCardComponent;
  let fixture: ComponentFixture<EpisodesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
