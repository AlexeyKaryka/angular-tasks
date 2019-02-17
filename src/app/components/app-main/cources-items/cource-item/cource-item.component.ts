import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../constants';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceItemComponent implements OnInit, OnChanges {

   constructor() { }

   @Input() item: CourseItem;
   @Input() navigateToCourse: Function;
   @Input() deleteHandler: Function;

   ngOnChanges(changes) {
   }

   ngOnInit() {
   }

   editHandler() {
      this.navigateToCourse(this.item.Id);
   }
}
