import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl']
})
export class BreadcrumbsComponent implements OnInit {

   private coursesPage = 'Courses';

   public breadcrumbs = this.coursesPage;

   constructor(
      private route: ActivatedRoute,
      private coursesService: CoursesService,
      private router: Router
   ) { }

   ngOnInit() {
      this.router.events.subscribe(event => {
         if (event instanceof RoutesRecognized && event.state.root.firstChild.params.id) {
            const { Title } = this.coursesService.getItemById(+event.state.root.firstChild.params.id);
            this.breadcrumbs = `${this.coursesPage}/${Title}`;
         } else if (event instanceof RoutesRecognized && !event.state.root.firstChild.params.id) {
            this.breadcrumbs = this.coursesPage;
         }
     });
   }

}
