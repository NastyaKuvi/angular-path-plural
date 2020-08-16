import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeGSComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeGSComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  GettingStartedRoutingModule { }
