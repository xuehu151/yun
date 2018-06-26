import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent implements OnInit {

  @Input() okText: string;
  @Input() cancelText: string;
  @Input() disabled: boolean;

  @Output() ok = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {

  }

  onCancel() {
    this.cancel.emit();
  }

  onOk() {
    this.ok.emit();
  }

}
