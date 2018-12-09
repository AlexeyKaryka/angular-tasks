import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

class PlainUser implements User {
   constructor(Id, FirstName, LastName) {
      this.Id = Id;
      this.FirstName = FirstName;
      this.LastName = LastName;
   }
   Id: number;
   FirstName: string;
   LastName: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.styl']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  userName: String;

  ngOnInit() {
     this.userName = 'User';
  }

  logoutHandler() {
     console.log('You\'ve logged out!');
  }

}
