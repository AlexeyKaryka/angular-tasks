import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {

   @Input() userName: string;
   @Input() login: Function;

   constructor(private authService: AuthorizationService) { }

   ngOnInit() {
   }

   loginHandler() {
      this.login(this.userName);
   }

}
