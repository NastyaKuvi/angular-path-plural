import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation.component';
import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { GettingStartedModule } from '../angular-getting-started/getting-started.module';
import { AngularFormsModule } from '../angular-forms/angular-forms.module';



@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    GettingStartedModule,
    AngularFormsModule,
    MainNavigationRoutingModule
  ],
  exports:[
    MainNavigationComponent
  ]
})
export class MainNavigationModule { }
