import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceItemComponent } from './cource-item.component';
import { CourcesItemsComponent } from '../cources-items.component';
import { CourseItem } from '../../constants';


const itemTitle = 'title';
const itemDate = 'date';
const itemDuration = 'duration';
const itemDescripion = 'description';
const itemRating = 'normal';

@Component({
   template: `
      <app-cource-item [item]="courseItem" (emitDeleteItem)="handleDeleteItem($event)"></app-cource-item>
   `,
 })
export class HostComponent {
   private courseItem: CourseItem = new CourseItem(1, itemTitle, itemDate, itemDuration, itemDescripion, itemRating);

   public handleDeleteItem() {
   }
}

describe('CourseItemComponent', () => {
   let hostComponent;
   let hostFixture: ComponentFixture<HostComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ CourceItemComponent, HostComponent ]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      hostFixture = TestBed.createComponent(HostComponent);
      hostComponent = hostFixture.componentInstance;
      hostFixture.detectChanges();

      spyOn(hostComponent, 'handleDeleteItem');
   });

   it('should create', () => {
      expect(hostComponent).toBeTruthy();
   });

   it('item should has item specific data from binding', () => {
      const nativeElement = hostFixture.nativeElement;

      expect(nativeElement.innerHTML).toContain(itemTitle);
      expect(nativeElement.innerHTML).toContain(itemDate);
      expect(nativeElement.innerHTML).toContain(itemDuration);
      expect(nativeElement.innerHTML).toContain(itemDescripion);
   });

   it('output property should emit event on clicking delete button', async () => {
      const nativeElement = hostFixture.nativeElement;
      nativeElement.querySelector('.buttonDelete').click();

      expect(hostComponent.handleDeleteItem).toHaveBeenCalled();
   });
});
