import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title/page-title.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProgressComponent } from './progress/progress.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    NgZorroAntdModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    NgZorroAntdModule,
    PageTitleComponent,
    ProgressComponent,
    SectionContainerComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  declarations: [
    PageTitleComponent,
    ProgressComponent,
    SectionContainerComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ]
})
export class ComponentsModule { }
