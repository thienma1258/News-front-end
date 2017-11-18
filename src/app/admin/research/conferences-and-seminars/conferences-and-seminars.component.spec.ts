import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesAndSeminarsComponent } from './conferences-and-seminars.component';

describe('ConferencesAndSeminarsComponent', () => {
  let component: ConferencesAndSeminarsComponent;
  let fixture: ComponentFixture<ConferencesAndSeminarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesAndSeminarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesAndSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
