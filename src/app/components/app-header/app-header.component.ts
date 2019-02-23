import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

   @Input() public isUserAuthenticated: boolean;

   @Input() public logout: Function;

   @Input() public userName: String;

   constructor() { }

   ngOnInit() {
   }

   private logoutHandler() {
      this.logout();
   }

}
