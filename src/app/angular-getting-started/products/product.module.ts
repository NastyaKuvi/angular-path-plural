import { NgModule } from '@angular/core';
import { SharedGSModule } from '../shared/shared.module';
import { ProductListGSComponent } from './product-list.component';
import { ProductDetailGSComponent } from './product-detail.component';
import { ProductGSRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListGSComponent,
    ProductDetailGSComponent,
  ],
  imports: [
    ProductGSRoutingModule,
    SharedGSModule
  ]
})
export class ProductGSModule {
}
