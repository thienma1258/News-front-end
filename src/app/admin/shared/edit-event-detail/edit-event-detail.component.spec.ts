import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventDetailComponent } from './edit-event-detail.component';

describe('EditEventDetailComponent', () => {
  let component: EditEventDetailComponent;
  let fixture: ComponentFixture<EditEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
