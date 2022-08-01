import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const headers = new HttpHeaders({
			'access-token': (localStorage.getItem('access-token') as string) || '',
			client: (localStorage.getItem('client') as string) || '',
			uid: (localStorage.getItem('uid') as string) || '',
		});

		return next.handle(request.clone({ headers: headers }));
	}
}
