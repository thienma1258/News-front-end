import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorInfomationComponent } from './advisor-infomation.component';

describe('AdvisorInfomationComponent', () => {
  let component: AdvisorInfomationComponent;
  let fixture: ComponentFixture<AdvisorInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
