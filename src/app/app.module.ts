import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { LandingComponent } from './modules/landing/landing.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { ProductsComponent } from './modules/products/products.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    PackagesComponent,
    ProductsComponent,
    StatisticsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
