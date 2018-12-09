import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.styl']
})
export class CourceItemComponent implements OnInit, OnChanges {

   constructor() { }

   @Input() item: object;

   @Output() emitDeleteItem = new EventEmitter<Number>();

   ngOnChanges(changes) {
      console.log('onChanges');
      console.log(changes);
   }

   ngOnInit() {
   }

   editHandler() {
      console.log('Edit!');
   }

   deleteHandler() {
      this.emitDeleteItem.emit(this.item.Id);
   }

}
