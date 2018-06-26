import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-extend-volume',
  templateUrl: './extend-volume.component.html',
  styleUrls: ['./extend-volume.component.scss']
})
export class ExtendVolumeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
  }

  onOk() {

  }

  onCancel() {

  }

}
