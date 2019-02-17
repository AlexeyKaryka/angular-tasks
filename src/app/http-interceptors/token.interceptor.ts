import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userToken } from 'services/authorization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
   constructor() {}
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
         setHeaders: {
            ...(localStorage.getItem(userToken) ? { Authorization: localStorage.getItem(userToken) } : {}),
            'Content-Type': 'application/json'
         }
      });
      return next.handle(request);
   }
}
