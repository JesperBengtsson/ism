import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { 
  DxButtonModule,
  DxCheckBoxModule,
  DxContextMenuModule,
  DxDateBoxModule,
  DxSchedulerModule,
  DxTemplateModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    DxButtonModule,
    DxCheckBoxModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxSchedulerModule,
    DxTemplateModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
    
  ],
  exports: [
    DxButtonModule,
    DxCheckBoxModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxSchedulerModule,
    DxTemplateModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}