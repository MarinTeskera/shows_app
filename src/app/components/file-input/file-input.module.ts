import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FileInputComponent } from './file-input.component';

@NgModule({
	declarations: [FileInputComponent],
	exports: [FileInputComponent],
	imports: [CommonModule, MatButtonModule],
})
export class FileInputModule {}
