import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.styl']
})
export class LogoComponent implements OnInit {

  constructor() { }

  logoSrc: String;
  logoSize: Number;

  ngOnInit() {
     this.logoSrc = 'assets/angular.png';
     this.logoSize = 30;
  }

}
