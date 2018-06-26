import { Keypair } from './../../../domain/keypair';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KeypairService } from '../../../ngrx/services/keypair.service';
import { SelectionModel } from '../../../utils/selection';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../ngrx/reducers';
import * as actions from '../../../ngrx/actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  dataSet$: Observable<Keypair[]>;
  selection = new SelectionModel<Keypair>(true, []);
  displayData = [];
  pageSize = 10;
  constructor(private store$: Store<fromRoot.State>, ) { }

  ngOnInit() {
    this.store$.dispatch(new actions.Actions.keypair.LoadKeypairAction(null));
    this.dataSet$ = this.store$.select(fromRoot.getKeypair);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.displayData.length;
    return numSelected === numRows;
  }

  masterToggle(value) {
    this.isAllSelected() ?
      this.selection.clear() :
      this.displayData.forEach(row => this.selection.select(row));
  }

  currentPageDataChange(event) {
    this.displayData = event;
  }

  sort({ key, value }) {
    console.log(key, value);
    if (key) {
      this.displayData = this.displayData.sort((a, b) => (value === 'ascend' ? (a[key] > b[key] ? 1 : -1) : (b[key] > a[key] ? 1 : -1)));
    }
  }
}
