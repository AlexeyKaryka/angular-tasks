import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CourcesItem } from '../constants';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.styl']
})
export class CourceItemComponent implements OnInit, OnChanges {

   constructor() { }

   @Input() item: CourcesItem;

   @Output() emitDeleteItem = new EventEmitter<Number>();

   ngOnChanges(changes) {
      console.log('onChanges');
      console.log(changes);
   }

   ngOnInit() {
   }

   private editHandler() {
      console.log('Edit!');
   }

   private deleteHandler() {
      this.emitDeleteItem.emit(this.item.Id);
   }

}
