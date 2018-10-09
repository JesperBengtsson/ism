import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatCheckboxModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
  ],
  exports: [
    DxButtonModule,
    DxCheckBoxModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxSchedulerModule,
    DxTemplateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
    MatCheckboxModule,
  ]
})
export class MaterialModule {}