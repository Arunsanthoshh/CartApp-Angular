import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product-list/product-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    ProductListComponent,
    OrdersComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
