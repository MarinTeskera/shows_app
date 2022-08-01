import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ILoginFormData } from 'src/app/services/interfaces/login.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});
	public sent = false;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private snackbar: MatSnackBar,
	) {}

	public onLoginClick(event: Event): void {
		event.preventDefault();
		this.sent = true;

		this.authService
			.login({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as ILoginFormData)
			.pipe(
				catchError(() => {
					this.snackbar.open('Invalid email or password', '', { duration: 3000 });
					this.sent = false;
					return EMPTY;
				}),
			)
			.subscribe((resp) => {
				this.router.navigate(['']);
			});
	}
}
