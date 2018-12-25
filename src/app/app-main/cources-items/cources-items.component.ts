import {
   Component,
   OnInit,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy
} from '@angular/core';
import { loremIpsum, CourcesItem } from './constants';
import { OrderByPipe } from '../../order-by.pipe';


@Component({
  selector: 'app-cources-items',
  templateUrl: './cources-items.component.html',
  styleUrls: ['./cources-items.component.styl'],
  providers: [OrderByPipe]
})
export class CourcesItemsComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   courseItems: CourcesItem[];

   constructor(private orderBy: OrderByPipe) {
      console.log('constructor is called before all of ng hooks!');
   }

   ngOnChanges() {
      console.log('onChanges');
   }

   ngOnInit() {
      console.log('OnInit');
      this.courseItems = this.orderBy.transform([
         new CourcesItem(1, 'Video course 1', new Date(2018, 3, 11), 15, loremIpsum, false),
         new CourcesItem(2, 'Video course 2', new Date(2018, 3, 12), 100, loremIpsum, true),
         new CourcesItem(3, 'Video course 3', new Date(2018, 11, 13), 170, loremIpsum, true),
         new CourcesItem(4, 'Video course 4', new Date(2018, 3, 14), 120, loremIpsum, false)
      ]);
   }

   ngDoCheck() {
      console.log('doCheck');
   }

   ngAfterContentInit() {
      console.log('AfterContentInit');
   }

   ngAfterContentChecked() {
      console.log('AfterContentChecked');
   }

   ngAfterViewInit() {
      console.log('AfterViewInit');
   }

   ngAfterViewChecked() {
      console.log('AfterViewChecked');
   }

   ngOnDestroy() {
      console.log('OnDestroy');
   }

   private loadMoreHandler() {
     console.log('Load more courses!');
   }

   private handleDeleteItem(itemId) {
      console.log(`Item with id ${itemId} will be deleted!`);
   }
}
