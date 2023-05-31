import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { LandingComponent } from './modules/landing/landing.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { UsersComponent } from './modules/users/users.component';
import { ProductsComponent } from './modules/products/products.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'packages',
    component: PackagesComponent,
  },
];

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
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
