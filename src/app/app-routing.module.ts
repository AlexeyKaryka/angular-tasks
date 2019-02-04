import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { AddCourseComponent } from './app-main/add-course/add-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
   {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full'
   },
   {
      path: 'courses',
      component: AppMainComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'courses/new',
      component: AddCourseComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'courses/:id',
      component: EditCourseComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'login',
      component: LoginPageComponent
   },
   {
      path: '**',
      component: NotFoundComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
