import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionRatioComponent } from './champion-ratio.component';

describe('ChampionRatioComponent', () => {
  let component: ChampionRatioComponent;
  let fixture: ComponentFixture<ChampionRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
