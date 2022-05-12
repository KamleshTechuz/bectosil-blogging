import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseComponent } from '../components/base/base.component';

@Injectable()
export class HttpconfigInterceptor extends BaseComponent implements HttpInterceptor {

  constructor(injector: Injector) { super(injector) }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.getToken()
    
    request = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    })

    return next.handle(request);
  }
}
