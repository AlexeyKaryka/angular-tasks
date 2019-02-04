import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {

   public userName: string;

   constructor(private authService: AuthorizationService, private router: Router) { }

   ngOnInit() {
   }

   loginHandler = () => {
      this.authService.login(this.userName);
      this.router.navigate(['courses']);
   }

}
