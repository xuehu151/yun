import { CreateVolumeComponent } from './../modal/create-volume/create-volume.component';
import { NzModalService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { TablePage } from '../../page/table-page';
import { Image } from '../../../domain';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as actions from '../../../ngrx/actions/image.action';
import * as fromRoot from '../../../ngrx/reducers';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends TablePage implements OnInit {


  dataSet$: Observable<Image[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private modal: NzModalService
  ) {
    super();
    this.store.dispatch(new actions.LoadAction(null));
  }

  ngOnInit() {
    this.dataSet$ = this.store.select(fromRoot.getImages);
  }

  createVolume() {
    // const ref = this.modal.info();
    // ref.close(); // 或 ref.destroy(); 将直接销毁对话框
    const modalRef = this.modal.create({
      nzTitle: '创建卷',
      nzContent: CreateVolumeComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOkText: "√👌创建卷",
      nzOnOk: function (res) {
        console.log(res);
        modalRef.close();
      },
      nzBodyStyle: { width: 50 }
    });
    // modalRef.afterOpen.
    modalRef.afterClose.pipe(
      // take(1),
      // filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });

  }

}
