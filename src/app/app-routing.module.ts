import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './Services/auth-guard.service';
import { CanDeactivateGuard } from './Services/can-deactivate-guard.service';
import { ProductResolver } from './Services/product-resolver.service';

const routes: Routes = [
  {path:'' ,component:HomeComponent}, 
  {path:'addProduct', canActivate: [AuthGuard],  component:AddProductComponent},
  {
    path: 'products',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ProductsComponent, children: [
    {path:':id', component:ProductComponent, resolve: {product: ProductResolver}},
    {path:':id/edit', component:EditProductComponent, canDeactivate: [CanDeactivateGuard]},
    // {path:'', component:HomeUserComponent},
    ]
  },
  {
    path: "users", loadChildren: () => import("./modules/users/users.module").then((m) =>m.UsersModule)
  },
 {path:'notfound', component:PagenotFoundComponent},
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
