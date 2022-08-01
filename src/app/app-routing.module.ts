import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { AuthLayoutModule } from './components/layouts/auth-layout/auth-layout.module';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { MainLayoutModule } from './components/layouts/main-layout/main-layout.module';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowDetailPageComponent } from './components/show-detail-page/show-detail-page.component';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: ShowsContainerComponent,
			},
			{
				path: 'top-rated',
				component: TopRatedComponent,
			},
			{
				path: 'show/:id',
				component: ShowDetailPageComponent,
			},
			{
				path: 'my-profile',
				component: MyProfileComponent,
			},
		],
	},
	{
		path: '',
		component: AuthLayoutComponent,
		canActivate: [AnonGuard],
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'register',
				component: RegisterComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
