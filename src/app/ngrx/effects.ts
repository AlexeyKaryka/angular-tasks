import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthorizationService } from 'services/authorization.service';
import { GET_INITIAL_USER_NAME, UpdateUserName } from './actions';

@Injectable()
export class Effects {
   constructor(
     private actions$: Actions,
     private authService: AuthorizationService
   ) {}

   @Effect()
   getUserName$ = this.actions$.pipe(
      ofType(GET_INITIAL_USER_NAME),
      switchMap(() => this.authService.getUserInfo().pipe(
         map(userInfo =>
            new UpdateUserName(userInfo ? this.authService.getUserName(userInfo) : '')
         )
      )),
   );

 }
