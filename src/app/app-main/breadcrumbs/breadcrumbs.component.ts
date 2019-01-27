import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent implements OnInit {

   public breadcrumbsPlaceholder: String = 'Courses';

   constructor() { }

   ngOnInit() {
   }

}
