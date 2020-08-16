import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeGSComponent } from './welcome/welcome.component';
import { ProductGSModule } from './products/product.module';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GettingStartedComponent,
    WelcomeGSComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ProductGSModule,
    GettingStartedRoutingModule,
  ],
  providers: [],
})
export class GettingStartedModule { }
