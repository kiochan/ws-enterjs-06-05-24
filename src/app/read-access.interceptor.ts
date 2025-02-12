import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class ReadAccessInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = environment.tmdbApiReadAccessKey;

    return next.handle(
      request.clone({
        headers: new HttpHeaders().set('Authorization', `Bearer ${key}`),
        /*setHeaders: {
          Authorization: `Bearer ${key}`,
        },*/
      })
    );
  }
}
