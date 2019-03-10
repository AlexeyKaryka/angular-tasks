import { AuthorRaw } from './authors';
export interface Cource {
  Id: number;
  Title: string;
  CreationDate: Date;
  Duration: number;
  Description: string;
  Rating: string;
  Authors: AuthorRaw[];
}

export interface CourseItemRaw {
   id: number;
   name: string;
   description: string;
   isTopRated: boolean;
   date: string;
   authors: AuthorRaw[];
   length: number;
}
