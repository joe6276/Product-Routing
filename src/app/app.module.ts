import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { AuthGuard } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import { CanDeactivateGuard } from './Services/can-deactivate-guard.service';
import { ProductResolver } from './Services/product-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    EditProductComponent,
    PagenotFoundComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
