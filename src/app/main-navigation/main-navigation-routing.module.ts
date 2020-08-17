import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from '../angular-getting-started/getting-started.component';
import { AngularFormsComponent } from '../angular-forms/angular-forms.component';


const routes: Routes = [
  {
    path: 'getting-started',
    component: GettingStartedComponent,
  },
  {
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
