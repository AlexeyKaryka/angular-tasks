import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

   @Input() private isUserAuthenticated: boolean;

   @Input() private logout: Function;

   @Input() private userName: String;

   constructor() { }

   ngOnInit() {
   }

   private logoutHandler() {
      this.logout();
      console.log('You\'ve logged out!');
   }

}
