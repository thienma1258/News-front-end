import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDetailsComponent } from './research-details.component';

describe('ResearchDetailsComponent', () => {
  let component: ResearchDetailsComponent;
  let fixture: ComponentFixture<ResearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
