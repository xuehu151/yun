import { Component, OnInit, ViewChild } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { TablePage } from '../../page/table-page';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../../ngrx/reducers';
import * as actions from '../../../ngrx/actions';
import { Store } from '@ngrx/store';
import { Volume } from '../../../domain/volume';
import { NzCarouselComponent, NzModalService } from 'ng-zorro-antd';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, take, filter } from 'rxjs/operators';
import { ExtendVolumeComponent } from '../modal/extend-volume/extend-volume.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends TablePage implements OnInit {

  dataSet$: Observable<Volume[]>;


  constructor(
    private store$: Store<fromRoot.State>,
    private modal: NzModalService
  ) {
    super();
    this.store$.dispatch(new actions.Actions.volume.LoadAction(null));
  }

  ngOnInit() {
    this.dataSet$ = this.store$.select(fromRoot.getVolumes);
  }

  onExtendVolume(data) {
    const modelRef = this.createModal('扩展卷', ExtendVolumeComponent);
    modelRef.afterClose.pipe(
      take(1),
      filter(v => v)
    ).subscribe(res => {
      console.log(res);
    });
  }

  private createModal(title: string, component: any, data?: any) {
    return this.modal.create({
      nzTitle: title,
      nzContent: component,
      nzFooter: null,
      nzWidth: 800,
      nzComponentParams: data
    });
  }

}
