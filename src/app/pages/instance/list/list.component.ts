import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Instance } from '../../../domain';
import { Store } from '@ngrx/store';
import { TablePage } from '../../page/table-page';
import { InstanceService } from '../../../ngrx/services/services.module';
import { NzModalService } from 'ng-zorro-antd';
import { CreateComponent } from '../create/create.component';
import { Router } from '@angular/router';
import * as fromRoot from '../../../ngrx/reducers';
import * as actions from '../../../ngrx/actions';
import { SnapshotModalComponent } from '../modal/snapshot-modal/snapshot-modal.component';
import { ConnectInterfacesComponent } from '../modal/connect-interfaces/connect-interfaces.component';
import { DisconnectInterfacesComponent } from '../modal/disconnect-interfaces/disconnect-interfaces.component';
import { filter, take } from 'rxjs/operators';
import { ConnectVolumesComponent } from '../modal/connect-volumes/connect-volumes.component';
import { DisconnectVolumesComponent } from '../modal/disconnect-volumes/disconnect-volumes.component';
import { EditInstanceComponent } from '../modal/edit-instance/edit-instance.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent extends TablePage implements OnInit {

  instance$: Observable<Instance[]>;

  constructor(
    private store$: Store<fromRoot.State>,
    private service: InstanceService,
    private modal: NzModalService,
    private router: Router
  ) {
    super();
    this.store$.dispatch(new actions.Actions.instance.LoadInstanceAction(null));
  }

  ngOnInit() {
    this.loadData();
    this.instance$ = this.store$.select(fromRoot.getInstances);
  }

  loadData() {
    this.service.getInstances(null).subscribe(res => {
      console.log(res);
    });
  }

  onCreateInstance() {
    // this.modal.create({ nzContent: CreateComponent, nzFooter: null });
    this.router.navigateByUrl('/instance/create');
  }

  goDetail(id, index) {
    this.router.navigate(['/instance/detail', id, index]);
  }

  onRemoveAll(instances) {
    this.modal.confirm({
      nzContent: '确认删除选中的实例',
      nzOnOk: () => new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.error('参数错误'))
    });
  }

  onRemove(instance) {
    this.modal.confirm({
      nzContent: '确认删除此实例',
      nzOnOk: () => new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.error('参数错误'))
    });
  }

  onCreateSnapshot(instance) {
    const modalRef = this.modal.create({
      nzTitle: '创建快照',
      nzContent: SnapshotModalComponent,
      nzFooter: null,
      // nzComponentParams: { test: 'test', data: 'adasdad' }
    });
    // modalRef.afterOpen.
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  onConnectInterface() {
    const modalRef = this.modal.create({
      nzTitle: '连接接口',
      nzContent: ConnectInterfacesComponent,
      nzFooter: null,
    });
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  disConnectInterface() {
    const modalRef = this.modal.create({
      nzTitle: '分离接口',
      nzContent: DisconnectInterfacesComponent,
      nzFooter: null
    });
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  onConnectVolumes() {
    const modalRef = this.modal.create({
      nzTitle: '连接卷',
      nzContent: ConnectVolumesComponent,
      nzFooter: null,
    });
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  disConnectVolumes() {
    const modalRef = this.modal.create({
      nzTitle: '分离卷',
      nzContent: DisconnectVolumesComponent,
      nzFooter: null,
    });
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  editInstance() {
    const modalRef = this.modal.create({
      nzTitle: '编辑实例',
      nzContent: EditInstanceComponent,
      nzFooter: null,
    });
    modalRef.afterClose.pipe(
      take(1),
      filter(val => val)
    ).subscribe(res => {
      console.log(res);
    });
  }

  updateMetadata() {

  }
  editSecurityGroups() {

  }

}
