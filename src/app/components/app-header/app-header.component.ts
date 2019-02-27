import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService, UserInfo } from 'services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

   @Input() public logout: Function;

   public userName: String;

   constructor(private authService: AuthorizationService) { }

   ngOnInit() {
      this.authService.userInfoUpdates().subscribe((data: UserInfo | null) => {
         this.userName = data ? `${data.name.first} ${data.name.last}` : '';
      });
   }

   private logoutHandler() {
      this.userName = '';
      this.logout();
   }

}
