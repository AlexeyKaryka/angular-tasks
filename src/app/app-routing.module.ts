import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from 'components/app-main/app-main.component';
import { AddCourseComponent } from 'components/add-course/add-course.component';
import { NotFoundComponent } from 'components/not-found/not-found.component';
import { EditCourseComponent } from 'components/edit-course/edit-course.component';
import { LoginPageComponent } from './login-module/components/login-page/login-page.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginPageGuard } from './guards/login-page-guard';

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
      component: LoginPageComponent,
      canActivate: [LoginPageGuard]
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
