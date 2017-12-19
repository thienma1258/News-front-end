import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchArticleListComponent } from './research-article-list.component';

describe('ResearchArticleListComponent', () => {
  let component: ResearchArticleListComponent;
  let fixture: ComponentFixture<ResearchArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
