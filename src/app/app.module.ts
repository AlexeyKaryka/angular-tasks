import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppCourseSearchComponent } from './app-main/app-course-search/app-course-search.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CourcesItemsComponent } from './app-main/cources-items/cources-items.component';
import { LogoComponent } from './app-header/logo/logo.component';
import { CourceItemComponent } from './app-main/cources-items/cource-item/cource-item.component';
import { BreadcrumbsComponent } from './app-main/breadcrumbs/breadcrumbs.component';
import { CourceDateIndicatorDirective } from './directives/cource-date-indicator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterCourseItemsPipe } from './pipes/filter-course-items.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
   declarations: [
      AppComponent,
      AppHeaderComponent,
      AppMainComponent,
      AppCourseSearchComponent,
      AppFooterComponent,
      CourcesItemsComponent,
      LogoComponent,
      CourceItemComponent,
      BreadcrumbsComponent,
      CourceDateIndicatorDirective,
      DurationPipe,
      OrderByPipe,
      FilterCourseItemsPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      LoginModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
