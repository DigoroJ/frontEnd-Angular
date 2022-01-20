import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProductsHeaderComponent,
    ProductDetailsComponent,
    FooterComponent,
    RegisterComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
