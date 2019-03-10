import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { AuthorizationService } from 'services/authorization.service';
import { SpinnerService } from 'services/spinner.service';
import { UserInfo } from 'interfaces/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

   public isLoadingActive = false;

   constructor(
      private authService: AuthorizationService,
      private router: Router,
      private spinnerService: SpinnerService
   ) {
   }

   ngOnInit() {
      this.spinnerService.getLoadingStatusSubscription().subscribe(isLoadingActive => {
         this.isLoadingActive = isLoadingActive;
      });
   }

   logout = () => {
      this.authService.logout();
   }
}
