import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEpisodesComponent } from './search-episodes.component';

describe('SearchEpisodesComponent', () => {
  let component: SearchEpisodesComponent;
  let fixture: ComponentFixture<SearchEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
