import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {NotificationService} from "../../services/notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private ns: NotificationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        if (request && request.url && request.url.includes("/api/users/get/login/")) {
          this.ns.error("Неверные логин и/или пароль.");
        } else {
          this.ns.error("Истек срок действия сессия. Пожалуйста, зайдите в систему повторно.");
        }
        this.authenticationService.logout();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
