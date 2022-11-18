import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { CustomProductComponent } from './custom-product/custom-product.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'products',
				component: ProductListComponent
			},
			{
				path: 'orders',
				component: OrdersComponent
			},
			{
				path: 'home',
				component: BodyComponent
			},
			{
				path: 'cart',
				component: CartComponent
			},
			{
				path: 'edit-product',
				component: CustomProductComponent
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
