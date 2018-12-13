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
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
