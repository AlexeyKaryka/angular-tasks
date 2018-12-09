import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';

const routes: Routes = [
   {
      path: 'courses-page',
      component: AppMainComponent
   },
   {
      path: '',
      redirectTo: '/courses-page',
      pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
