import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormsComponent } from './angular-forms.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AngularFormsComponent,
    UserSettingsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AngularFormsComponent
  ]
})
export class AngularFormsModule { }
