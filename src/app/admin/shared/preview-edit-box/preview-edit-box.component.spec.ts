import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEditBoxComponent } from './preview-edit-box.component';

describe('PreviewEditBoxComponent', () => {
  let component: PreviewEditBoxComponent;
  let fixture: ComponentFixture<PreviewEditBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEditBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
