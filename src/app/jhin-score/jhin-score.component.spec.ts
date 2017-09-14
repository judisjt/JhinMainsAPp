import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhinScoreComponent } from './jhin-score.component';

describe('JhinScoreComponent', () => {
  let component: JhinScoreComponent;
  let fixture: ComponentFixture<JhinScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhinScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhinScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
