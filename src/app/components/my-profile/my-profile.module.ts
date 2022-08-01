import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileInputModule } from '../file-input/file-input.module';
import { MyProfileComponent } from './my-profile.component';

@NgModule({
	declarations: [MyProfileComponent],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FileInputModule],
	exports: [MyProfileComponent],
})
export class MyProfileModule {}
