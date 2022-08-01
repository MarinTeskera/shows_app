import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
	selector: 'app-file-input',
	templateUrl: './file-input.component.html',
	styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
	@Input() public userImage: string | null = null;
	@Output() public upload = new EventEmitter<any>();

	public currentImg: any;
	private file?: File;

	constructor(private readonly uploadService: UploadService) {}

	public onFileInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		console.log('files', inputElement.files);
	}

	public onDragOver(event: DragEvent) {
		event.preventDefault();
	}

	public onFileDrop(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer?.files) {
			const file = event.dataTransfer.files[0];
			this.file = file;
			this.changeCurrentImg(file);
		}
	}

	public previewFile(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files) {
			const file = inputElement.files[0];
			this.file = file;
			this.changeCurrentImg(file);
		}
	}

	private changeCurrentImg(file: File) {
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				this.currentImg = reader.result;
			};
			reader.readAsDataURL(file);
		}
	}

	public onUploadButtonClick() {
		if (this.file) {
			this.uploadService.upload(this.file).subscribe();
		}

		this.currentImg = null;

		this.upload.emit();
	}
}
