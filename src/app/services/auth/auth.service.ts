import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';
import { ILoginFormData } from '../interfaces/login.interface';
import { IMeResponse } from '../interfaces/me-response';
import { IRegistrationFormData } from '../interfaces/registration.interface';
import { IUser } from '../interfaces/user.interface';

interface IAuthResponse {
	user: IUser;
	protorype: Object;
	headers: Headers;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public currentUser: IUser | null = {
		email: 'marin@mail.com',
		id: '1855',
		image_url: null,
	};

	private _user$ = new BehaviorSubject<IUser | null>(null);
	public user$ = this._user$.asObservable();

	constructor(private readonly http: HttpClient) {}

	public me(): Observable<IMeResponse> {
		return this.http.get<IMeResponse>('https://tv-shows.infinum.academy/users/me');
	}

	public init(): Observable<IUser> {
		return this.http.get<IUser>('https://tv-shows.infinum.academy/users/me').pipe(
			catchError(() => {
				return EMPTY;
			}),
			tap((user) => {
				console.log('user', user);
				this._user$.next(user);
			}),
		);
	}

	public register(data: IRegistrationFormData): Observable<any> {
		return this.http.post<any>('https://tv-shows.infinum.academy/users', data, { observe: 'response' }).pipe(
			tap((resp) => {
				localStorage.setItem('uid', resp.headers.get('uid') as string);
				localStorage.setItem('access-token', resp.headers.get('access-token') as string);
				localStorage.setItem('client', resp.headers.get('client') as string);

				this._user$.next(resp.body.user);
			}),
		);
	}

	public login(data: ILoginFormData): Observable<any> {
		return this.http
			.post<any>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((resp) => {
					localStorage.setItem('uid', resp.headers.get('uid') as string);
					localStorage.setItem('access-token', resp.headers.get('access-token') as string);
					localStorage.setItem('client', resp.headers.get('client') as string);

					this._user$.next(resp.body.user);
				}),
			);
	}

	public logout(): void {
		localStorage.setItem('uid', '');
		localStorage.setItem('access-token', '');
		localStorage.setItem('client', '');
		this._user$.next(null);
	}

	public changeUser(user: IUser): void {
		this.currentUser = user;
	}
}
