import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThereAreNoItensComponent } from './there-are-no-itens.component';

describe('ThereAreNoItensComponent', () => {
  let component: ThereAreNoItensComponent;
  let fixture: ComponentFixture<ThereAreNoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThereAreNoItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThereAreNoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
