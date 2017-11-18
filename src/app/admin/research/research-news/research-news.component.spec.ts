import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchNewsComponent } from './research-news.component';

describe('ResearchNewsComponent', () => {
  let component: ResearchNewsComponent;
  let fixture: ComponentFixture<ResearchNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
