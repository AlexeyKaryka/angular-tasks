import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppCourseSearchComponent } from './app-course-search.component';

describe('AppCourseSearchComponent', () => {
  let component: AppCourseSearchComponent;
  let fixture: ComponentFixture<AppCourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         FormsModule
      ],
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
