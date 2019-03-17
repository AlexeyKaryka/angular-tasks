import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Author, AuthorRaw } from 'interfaces/authors';

const authorsEndpoint = 'http://localhost:3004/authors';

@Component({
   selector: 'app-authors',
   templateUrl: './authors.component.html',
   styleUrls: ['./authors.component.styl'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => AuthorsComponent),
         multi: true
      },
      {
         provide: NG_VALIDATORS,
         useExisting: AuthorsComponent,
         multi: true
      }
   ]
})
export class AuthorsComponent implements OnInit, ControlValueAccessor {

   authors: string[] = [];
   authorsFromServer: string[] = [];
   authorsInputValue = '';

   constructor(private http: HttpClient) { }

   ngOnInit() {
   }

   validate(control: AbstractControl): ValidationErrors | null {
      const { value } = control;
      if (!value || !value.length) {
         return {
            duration: {
               valid: false
            }
         };
      }
      return null;
   }

   writeValue(authors: AuthorRaw[]) {
      if (!authors) {
         this.authors = [];
      } else {
         const processedAuthors = authors.map(author => `${author.firstName} ${author.lastName}`);
         this.authors = this.authors.concat(processedAuthors);
      }
   }

   onChange: any = () => {};

   registerOnChange(callback) {
      this.onChange = callback;
   }

   registerOnTouched() {
   }

   addAuthor(authorForAdding) {
      this.authors = this.authors.concat(authorForAdding);
      this.onChange(this.authors);
   }

   removeAuthor(authorForRemoving) {
      this.authors = this.authors.filter(author => author !== authorForRemoving);
      this.onChange(this.authors);
   }

   authorsOnChange() {
      // Here we check whether we've already choosen option from list we've got from server
      // this wordaround is needed because option in <datalist> doesn't have click event
      for (const author of this.authorsFromServer) {
         if (author === this.authorsInputValue) {
            this.authorsInputValue = '';
            this.addAuthor(author);
            return;
         }
      }

      this.http.get<Author[]>(authorsEndpoint, {
         params: {
            textFragment: this.authorsInputValue
         }
      }).subscribe((authors: Author[]) => {
         this.authorsFromServer = authors.reduce((accum: string[], author) => {
            return accum.concat(author.name);
         }, []);
      });
   }
}
