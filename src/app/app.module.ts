import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLayoutModule } from './components/layouts/auth-layout/auth-layout.module';
import { LoginModule } from './components/login/login.module';
import { MyProfileModule } from './components/my-profile/my-profile.module';
import { RegisterModule } from './components/register/register.module';
import { ShowDetailPageModule } from './components/show-detail-page/show-detail-page.module';
import { ShowsContainerModule } from './components/shows-container/shows-container.module';
import { TopRatedModule } from './components/top-rated/top-rated.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ShowsContainerModule,
		TopRatedModule,
		ShowDetailPageModule,
		AuthLayoutModule,
		LoginModule,
		RegisterModule,
		HttpClientModule,
		MyProfileModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: AuthInterceptor,
		},
		{
			provide: APP_INITIALIZER,
			multi: true,
			useFactory: (authService: AuthService) => {
				return () => authService.init();
			},
			deps: [AuthService],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
