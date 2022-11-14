import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuardService } from './services/auth-gaurd.service';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'products',
				component: ProductListComponent
			}
		]
	},
	{
		path: 'login',
		loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
	}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
