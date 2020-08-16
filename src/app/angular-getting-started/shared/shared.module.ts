import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarGSComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesGSPipe } from './pipes/convert-to-spaces-pipe';



@NgModule({
  declarations: [
    StarGSComponent,
    ConvertToSpacesGSPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarGSComponent,
    ConvertToSpacesGSPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedGSModule { }
