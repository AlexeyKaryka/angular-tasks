import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CourseItem } from '../../constants';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.styl']
})
export class CourceItemComponent implements OnInit, OnChanges {

   constructor() { }

   @Input() item: CourseItem;

   @Output() emitDeleteItem = new EventEmitter<Number>();

   ngOnChanges(changes) {
      console.log('onChanges');
      console.log(changes);
   }

   ngOnInit() {
      console.log(this.item.CreationDate);
   }

   private editHandler() {
      console.log('Edit!');
   }

   private deleteHandler() {
      const toDelete = confirm(`Are you convinced to delete course "${this.item.Title}"?`);
      if (toDelete) {
         this.emitDeleteItem.emit(this.item.Id);
      }
   }

}
