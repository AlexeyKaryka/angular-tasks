import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent implements OnInit {

   public breadcrumbsRest = '';

   constructor(
      private route: ActivatedRoute,
      private coursesService: CoursesService,
      private router: Router
   ) { }

   ngOnInit() {
      this.router.events.subscribe(event => {
         if (event instanceof RoutesRecognized && event.state.root.firstChild.params.id) {
            this.coursesService.getItemById(+event.state.root.firstChild.params.id).subscribe(courseItem => {
               this.breadcrumbsRest = `/${courseItem.Title}`;
            });
         } else if (event instanceof RoutesRecognized && event.url.endsWith('/new')) {
            this.breadcrumbsRest = '/Add new course';
         } else if (event instanceof RoutesRecognized) {
            this.breadcrumbsRest = '';
         }
      });
   }

}
