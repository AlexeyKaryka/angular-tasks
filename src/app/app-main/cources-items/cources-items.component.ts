import { Component, OnInit } from '@angular/core';
import { Cource } from '../../interfaces/cource';

const courcesItems: Cource[] = [
   {
      Id: 12,
      Title: 'title1',
      CreationDate: '12.12.2018',
      Duration: '12 minutes',
      Description: 'cool item',
   },
   {
      Id: 13,
      Title: 'title2',
      CreationDate: '12.17.2018',
      Duration: '17 minutes',
      Description: 'cool item 2',
   }
];


@Component({
  selector: 'cources-items',
  templateUrl: './cources-items.component.html',
  styleUrls: ['./cources-items.component.styl']
})
export class CourcesItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
