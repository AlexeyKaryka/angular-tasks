import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourcesItem } from './constants';
import { CourcesItemsComponent } from './cources-items.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursesItemsComponent', () => {
   let component: CourcesItemsComponent;
   let fixture: ComponentFixture<CourcesItemsComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CourcesItemsComponent ],
         schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CourcesItemsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should render correctly', () => {
      const nativeElement = fixture.nativeElement;
      fixture.detectChanges();
      expect(nativeElement.querySelector('.coursesItemsList') !== null).toBeTruthy();
      expect(nativeElement.querySelector('.loadMoreButton') !== null).toBeTruthy();

      expect(nativeElement.querySelectorAll('app-cource-item').length).toBe(component.courseItems.length);
   });
});
