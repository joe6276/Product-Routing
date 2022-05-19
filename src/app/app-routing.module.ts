import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeComponent } from './home/home.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent}, 
  {path:'addProduct', component:AddProductComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:':id', component:ProductComponent},
    {path:':id/edit', component:EditProductComponent},
    {path:'', component:HomeUserComponent},
  ]},
 {path:'notfound', component:PagenotFoundComponent},
 {path:'**', redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
