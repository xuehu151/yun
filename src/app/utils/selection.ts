import { Subject } from 'rxjs/Subject';


export class SelectionModel<T> {
  private _selection: Set<T> = new Set();

  private _deselectedToEmit: T[] = [];

  private _selectedToEmit: T[] = [];

  private _selected: T[] | null;

  get selected(): T[] {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }

  onChange: Subject<SelectionChange<T>> | null = this._emitChanges ? new Subject() : null;

  constructor(
    private _multiple = false,
    initiallySelectedValues?: T[],
    private _emitChanges = true
  ) {
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }

      this._selectedToEmit.length = 0;
    }
  }

  /**
   * 选中一个或多个值。
   * @param values 一个或多个值
   */
  select(...values: T[]): void {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    this._emitChangeEvent();
  }

  deselect(...values: T[]): void {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    this._emitChangeEvent();
  }

  toggle(value: T): void {
    this.isSelected(value) ? this.deselect(value) : this.select(value);
  }

  clear(): void {
    this._unmarkAll();
    this._emitChangeEvent();
  }

  isSelected(value: T): boolean {
    return this._selection.has(value);
  }

  isEmpty(): boolean {
    return this._selection.size === 0;
  }

  hasValue(): boolean {
    return !this.isEmpty();
  }

  sort(predicate?: (a: T, b: T) => number): void {
    if (this._multiple && this._selected) {
      this._selected.sort(predicate);
    }
  }

  private _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      if (this.onChange) {
        this.onChange.next({
          source: this,
          added: this._selectedToEmit,
          removed: this._deselectedToEmit
        });
      }
      this._selectedToEmit = [];
      this._deselectedToEmit = [];
    }
  }

  private _verifyValueAssignment(values: T[]) {
    if (values.length > 1 && !this._multiple) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }


  private _markSelected(value: T) {
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      this._selection.add(value);
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }

  private _unmarkSelected(value: T) {
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }

  private _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }

}

export interface SelectionChange<T> {
  /** Model that dispatched the event. */
  source: SelectionModel<T>;
  /** Options that were added to the model. */
  added: T[];
  /** Options that were removed from the model. */
  removed: T[];
}

/**
 * 返回一个错误，该错误报告将多个值传递给一个具有单个值的选择模型。
 */
export function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
