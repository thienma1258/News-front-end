import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNewsComponent } from './department-news.component';

describe('DepartmentNewsComponent', () => {
  let component: DepartmentNewsComponent;
  let fixture: ComponentFixture<DepartmentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
