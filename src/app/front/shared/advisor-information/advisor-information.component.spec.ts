import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorInformationComponent } from './advisor-information.component';

describe('AdvisorInformationComponent', () => {
  let component: AdvisorInformationComponent;
  let fixture: ComponentFixture<AdvisorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
