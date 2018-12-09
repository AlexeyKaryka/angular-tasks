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
import { Cource } from 'interfaces/cource';
import { loremIpsum } from './constants';

class CourcesItem implements Cource {
   constructor(Id, Title, CreationDate, Duration, Description) {
      this.Id = Id;
      this.Title = Title;
      this.CreationDate = CreationDate;
      this.Duration = Duration;
      this.Description = Description;
   }

   Id: number;
   Title: string;
   CreationDate: string;
   Duration: string;
   Description: string;
}


@Component({
  selector: 'app-cources-items',
  templateUrl: './cources-items.component.html',
  styleUrls: ['./cources-items.component.styl']
})
export class CourcesItemsComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   constructor() {
      console.log('constructor is called before all of ng hooks!');
   }

   courseItems: CourcesItem[];

   ngOnChanges() {
      console.log('onChanges');
   }

   ngOnInit() {
      console.log('OnInit');
      this.courseItems = [
         new CourcesItem(1, 'Video course 1', '11.03.2018', '15 minutes', loremIpsum),
         new CourcesItem(2, 'Video course 2', '12.03.2018', '10 minutes', loremIpsum),
         new CourcesItem(3, 'Video course 3', '13.03.2018', '17 minutes', loremIpsum),
         new CourcesItem(4, 'Video course 4', '14.03.2018', '12 minutes', loremIpsum)
      ];
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

   loadMoreHandler() {
     console.log('Load more courses!');
   }

   handleDeleteItem(itemId) {
      console.log(`Item with id ${itemId} will be deleted!`);
   }
}
