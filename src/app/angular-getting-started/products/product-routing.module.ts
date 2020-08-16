import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListGSComponent } from './product-list.component';
import { ProductDetailGSComponent } from './product-detail.component';
import { ProductDetailGSGuard } from './product-detail.guard';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListGSComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailGSComponent,
    canActivate: [
      ProductDetailGSGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGSRoutingModule { }
