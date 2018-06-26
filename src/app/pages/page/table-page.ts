import { SelectionModel } from '../../utils/selection';

export class TablePage {
  selection = new SelectionModel<any>(true, []);
  displayData = [];

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
    if (key) {
      this.displayData = this.displayData.sort((a, b) => (value === 'ascend' ? (a[key] > b[key] ? 1 : -1) : (b[key] > a[key] ? 1 : -1)));
    }
  }
}
