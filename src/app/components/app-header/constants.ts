import { User } from 'interfaces/user';

export class PlainUser implements User {
   constructor(Id, FirstName, LastName) {
      this.Id = Id;
      this.FirstName = FirstName;
      this.LastName = LastName;
   }
   Id: number;
   FirstName: string;
   LastName: string;
}
