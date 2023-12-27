import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipExampleComponent } from './tooltip-example.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    TooltipExampleComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    TooltipExampleComponent
  ]
})
export class TooltipModule { }
