import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductDetailsComponent },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
