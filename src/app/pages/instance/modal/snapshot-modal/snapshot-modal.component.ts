import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-snapshot-modal',
  templateUrl: './snapshot-modal.component.html',
  styleUrls: ['./snapshot-modal.component.scss']
})
export class SnapshotModalComponent implements OnInit {


  form: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) { }

  ngOnInit() {
    // console.log(this.modalRef.getContentComponent());
    // console.log(this.test);
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }
  onCancel() {
    this.modalRef.close(false);
  }

  onOk() {
    this.modalRef.close(this.form.value);
  }

}
