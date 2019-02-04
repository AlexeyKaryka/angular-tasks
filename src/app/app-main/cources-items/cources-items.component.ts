import {
   Component,
   OnInit,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   Input,
   Output,
   EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from '../constants';


@Component({
  selector: 'app-cources-items',
  templateUrl: './cources-items.component.html',
  styleUrls: ['./cources-items.component.styl'],
})
export class CourcesItemsComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   @Output() emitDeleteItem = new EventEmitter<number>();

   @Input() courseItems: CourseItem[];

   constructor(private router: Router) {
      console.log('constructor is called before all of ng hooks!');
   }

   ngOnChanges() {
      console.log('onChanges');
   }

   ngOnInit() {
      console.log('OnInit');
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

   private handleDeleteItem = ({itemId, itemTitle}) => {
      const toDelete = confirm(`Are you convinced to delete course "${itemTitle}"?`);
      if (toDelete) {
         console.log(`Item with id ${itemId} will be deleted!`);
         this.emitDeleteItem.emit(itemId);
      }
   }

   private navigateToCourse = (courseId) => {
      this.router.navigate([`courses/${courseId}`]);
   }
}
