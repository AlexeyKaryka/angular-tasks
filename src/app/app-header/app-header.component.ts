import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

class user implements User {
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

  ngOnInit() {
  }

}
