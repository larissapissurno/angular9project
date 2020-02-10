import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('spinner show');
    this.spinner.show();

    return Observable.create(observer => {
      const subscription = next.handle(req)
        .subscribe(
        event => {
          if (event instanceof HttpResponse) {
            this.spinner.hide();
            observer.next(event);
          }
        },
        err => { this.spinner.hide(); observer.error(err); },
        () => { this.spinner.hide(); observer.complete(); });
      return () => {
        this.spinner.hide();
        subscription.unsubscribe();
      };
    });
  }


}
