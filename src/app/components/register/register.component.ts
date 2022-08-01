import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IRegistrationFormData } from 'src/app/services/interfaces/registration.interface';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email /* , this.emailChecker(/marin/i) */]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});
	public sent = false;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private snackbar: MatSnackBar,
	) {}

	public onRegisterClick(event: Event): void {
		event.preventDefault();
		this.sent = true;

		if (this.form.controls.password.value !== this.form.controls.confirmPassword.value) {
			this.snackbar.open('Passwords must match', '', { duration: 3000 });
			this.sent = false;
			return;
		}

		this.authService
			.register({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
			} as IRegistrationFormData)
			.pipe(
				catchError(() => {
					this.snackbar.open('Invalid email or password', '', { duration: 3000 });
					this.sent = false;
					return EMPTY;
				}),
			)
			.subscribe((value) => {
				console.log(value);
				this.router.navigate(['']);
			});
	}

	private emailChecker(nameRe: RegExp): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const forbidden = nameRe.test(control.value);
			return forbidden ? { forbiddenName: { value: control.value } } : null;
		};
	}
}
