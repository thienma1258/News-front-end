import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewsResearchComponent } from './article-news-research.component';

describe('ArticleNewsResearchComponent', () => {
  let component: ArticleNewsResearchComponent;
  let fixture: ComponentFixture<ArticleNewsResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNewsResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNewsResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
