import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from
  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() &&
      req.url.indexOf('auth') === -1) {
      console.log(this.authenticationService.username)
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Basic
${window.btoa(this.authenticationService.username + ":" +
            this.authenticationService.password)}`
        })
      });
       //return next.handle(authReq);
     return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}