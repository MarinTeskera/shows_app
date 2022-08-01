import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UploadService {
	constructor(private readonly http: HttpClient) {}

	public upload(file: File): Observable<any> {
		const form = new FormData();
		form.append('image', file);

		return this.http.put('https://tv-shows.infinum.academy/users', form);
	}
}
