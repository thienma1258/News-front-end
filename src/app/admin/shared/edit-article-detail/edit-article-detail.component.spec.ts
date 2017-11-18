import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleDetailComponent } from './edit-article-detail.component';

describe('EditArticleDetailComponent', () => {
  let component: EditArticleDetailComponent;
  let fixture: ComponentFixture<EditArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
