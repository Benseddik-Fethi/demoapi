import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureCardComponent } from './voiture-card.component';

describe('VoitureCardComponent', () => {
  let component: VoitureCardComponent;
  let fixture: ComponentFixture<VoitureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
