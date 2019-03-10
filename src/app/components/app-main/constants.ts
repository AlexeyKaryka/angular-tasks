import { Cource } from 'interfaces/cource';

export const loremIpsum: string = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

export class CourseItem implements Cource {
   constructor(Id, Title, CreationDate, Duration, Description, Rating) {
      this.Id = Id;
      this.Title = Title;
      this.CreationDate = CreationDate;
      this.Duration = Duration;
      this.Description = Description;
      this.Rating = Rating;
   }

   Id: number;
   Title: string;
   CreationDate: Date;
   Duration: number;
   Description: string;
   Rating: string;
}
