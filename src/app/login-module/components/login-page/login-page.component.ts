import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {

   public userName: string;
   public userPassword: string;

   constructor(private authService: AuthorizationService, private router: Router) { }

   ngOnInit() {
   }

   loginHandler = () => {
      this.authService.login({ name: this.userName, password: this.userPassword });
   }

}
