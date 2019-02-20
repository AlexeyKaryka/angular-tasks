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
export class CourcesItemsComponent {

   @Output() emitDeleteItem = new EventEmitter<number>();

   @Input() courseItems: CourseItem[];
   @Input() loadMoreHandler: Function;

   constructor(private router: Router) {
   }

   private handleDeleteItem = ({itemId, itemTitle}) => {
      const toDelete = confirm(`Are you convinced to delete course "${itemTitle}"?`);
      if (toDelete) {
         this.emitDeleteItem.emit(itemId);
      }
   }

   private navigateToCourse = (courseId) => {
      this.router.navigate([`courses/${courseId}`]);
   }
}
