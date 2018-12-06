import { Component, OnInit } from '@angular/core';
import { Cource } from '../../interfaces/cource';

class courcesItems implements Cource {
   constructor(Id, Title, CreationDate, Duration, Description) {
      this.Id = Id;
      this.Title = Title;
      this.CreationDate = CreationDate;
      this.Duration = Duration;
      this.Description = Description;
   }

   Id: number;
   Title: string;
   CreationDate: string;
   Duration: string;
   Description: string;
}


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
