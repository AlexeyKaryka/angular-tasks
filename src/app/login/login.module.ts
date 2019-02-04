import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from 'login-page/login-page.component';

@NgModule({
   declarations: [
      LoginPageComponent
   ],
   imports: [
      FormsModule,
      CommonModule
   ],
   exports: [
      LoginPageComponent
   ]
})
export class LoginModule { }
