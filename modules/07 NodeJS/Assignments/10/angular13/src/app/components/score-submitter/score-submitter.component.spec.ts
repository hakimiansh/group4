import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubmitterComponent } from './score-submitter.component';

describe('ScoreSubmitterComponent', () => {
  let component: ScoreSubmitterComponent;
  let fixture: ComponentFixture<ScoreSubmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSubmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
