import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { TokenInterceptor } from 'http-interceptors/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from 'components/app-header/app-header.component';
import { AppMainComponent } from 'components/app-main/app-main.component';
import { AppCourseSearchComponent } from 'components/app-main/app-course-search/app-course-search.component';
import { AppFooterComponent } from 'components/app-footer/app-footer.component';
import { CourcesItemsComponent } from 'components/app-main/cources-items/cources-items.component';
import { LogoComponent } from 'components/app-header/logo/logo.component';
import { CourceItemComponent } from 'components/app-main/cources-items/cource-item/cource-item.component';
import { BreadcrumbsComponent } from 'components/app-main/breadcrumbs/breadcrumbs.component';
import { AddCourseComponent } from 'components/add-course/add-course.component';
import { NotFoundComponent } from 'components/not-found/not-found.component';
import { EditCourseComponent } from 'components/edit-course/edit-course.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CourceDateIndicatorDirective } from './directives/cource-date-indicator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterCourseItemsPipe } from './pipes/filter-course-items.pipe';
import { LoginModule } from './login-module/login.module';
import { userNameReducer, courseItemsReducer, foundItemsReducer } from 'ngrx/reducers';
import { Effects } from 'ngrx/effects';


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
      FilterCourseItemsPipe,
      AddCourseComponent,
      NotFoundComponent,
      EditCourseComponent,
      LoaderComponent
   ],
   imports: [
      StoreModule.forRoot({
         userName: userNameReducer,
         courseItems: courseItemsReducer,
         foundItems: foundItemsReducer
      }),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([Effects]),
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      LoginModule
   ],
   providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
