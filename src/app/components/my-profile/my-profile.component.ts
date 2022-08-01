import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, switchMap, catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IMeResponse } from 'src/app/services/interfaces/me-response';
import { IUser } from 'src/app/services/interfaces/user.interface';

@Component({
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
	private trigger$: BehaviorSubject<undefined> = new BehaviorSubject(undefined);
	public user$: Observable<IMeResponse> = this.trigger$.pipe(
		switchMap(() => {
			return this.authService.me().pipe(
				catchError((error) => {
					console.error(error);
					return EMPTY;
				}),
			);
		}),
	);
	public currentImage?: string;
	public form = new FormGroup({
		image: new FormControl(''),
	});

	constructor(private readonly authService: AuthService) {}

	public changeImage() {
		this.currentImage = this.form.controls.image.value as string;
	}

	public reload() {
		this.trigger$.next(undefined);
	}
}
