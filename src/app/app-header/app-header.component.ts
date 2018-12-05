import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

const user: User = {
   Id: 1,
   FirstName: 'anyFirstName',
   LastName: 'anyLastName'
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
