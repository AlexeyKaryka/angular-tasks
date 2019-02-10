import { Component, OnInit } from '@angular/core';
import { PlainUser } from './constants';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

   private userName: String = 'User';

   constructor() { }

   ngOnInit() {
   }

   private logoutHandler() {
     console.log('You\'ve logged out!');
   }

}
