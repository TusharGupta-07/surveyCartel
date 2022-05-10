
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


// const TOKEN_HEADER = 'Authorization';

@Injectable() 
export class AuthInterceptor implements HttpInterceptor{
   
   constructor(private login:LoginService){}
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add the jwt token (LocalStorage) request
        let authReq =req;
    const token=this.login.getToken();
    console.log("inside interceptor");
    if(token!=null){
         console.log(" Token -> ", token);
        authReq=authReq.clone({
            setHeaders:{Authorization:`Bearer ${token}`},
    });
    }
    return next.handle(authReq);
  }
}

// 25:00

export const authInterceptorProviders=[
     {
         provide: HTTP_INTERCEPTORS,
        // such a shitty mistake i did , i was using user insread of use in userClass: AuthInterceptor, userClass was wrong
        useClass: AuthInterceptor, //use this one
         multi: true,
     },
 ];