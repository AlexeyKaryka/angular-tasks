import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCourseSearchComponent } from './app-course-search.component';

describe('AppNavComponent', () => {
  let component: AppCourseSearchComponent;
  let fixture: ComponentFixture<AppCourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCourseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
