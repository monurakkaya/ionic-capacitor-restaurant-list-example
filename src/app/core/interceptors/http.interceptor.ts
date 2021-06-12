import {Inject, Injectable} from '@angular/core';
import {
  HttpInterceptor as BaseInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ErrorService} from '../services/error.service';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Platform} from '@ionic/angular';

@Injectable()
export class HttpInterceptor implements BaseInterceptor {

  constructor(
    @Inject('apiKey') private apiKey,
    private platform: Platform,
    private errorService: ErrorService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.errorService.clearErrors();
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept : 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      apiKey: ''
    };
    return fromPromise(this.getToken())
      .pipe(switchMap(token => {
        if (token) {
          headers.apiKey = `${token}`;
        }
        const authReq = request.clone({
          headers: new HttpHeaders(headers)
        });
        return next.handle(authReq)
          .pipe(
            map((response: HttpResponse<any>) => {
              if (response instanceof HttpResponse) {
                if (!response.body.hasOwnProperty('response')) {
                  throw this.resolveErrors(response.body.error);
                }
              }
              return response;
            })
          )
          .pipe(catchError((err: HttpErrorResponse) => {
            throw this.resolveErrors(err.error);
          }));
      }));


  }
  resolveErrors(error) {
    if (error.desc) {
      this.errorService.setErrors(error.desc);
      return error.desc;
    } else if (error.message) {
      this.errorService.setErrors(error.message);
    }
    return error;
  }

  getToken() {
    return this.platform.ready()
      .then(() => this.apiKey);
  }
}
