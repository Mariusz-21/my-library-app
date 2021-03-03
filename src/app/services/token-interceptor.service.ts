import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


export class TokenInterceptorService implements HttpInterceptor {
  baseUrl= environment.baseUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localkey = localStorage.getItem('auth');
    if(localkey){
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${localkey}`
        }
      })
    }
    return next.handle(req);
  }
}
