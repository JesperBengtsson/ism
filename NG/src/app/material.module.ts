import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatTabsModule
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
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule
    
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
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class MaterialModule {}