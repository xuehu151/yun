import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOptionGroupDirective } from './table-option-group.directive';
import { PageBodyDirective } from './page-body.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TableOptionGroupDirective, PageBodyDirective],
  declarations: [TableOptionGroupDirective, PageBodyDirective]
})
export class DirectivesModule { }
