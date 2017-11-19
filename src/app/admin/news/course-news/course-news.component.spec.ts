import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNewsComponent } from './course-news.component';

describe('CourseNewsComponent', () => {
  let component: CourseNewsComponent;
  let fixture: ComponentFixture<CourseNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
