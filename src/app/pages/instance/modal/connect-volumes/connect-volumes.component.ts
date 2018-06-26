import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-connect-volumes',
  templateUrl: './connect-volumes.component.html',
  styleUrls: ['./connect-volumes.component.scss']
})
export class ConnectVolumesComponent implements OnInit {

  form: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      volumes: [null, Validators.required]
    });
  }

  onCancel() {
    this.modalRef.close(false);
  }

  onOk() {
    this.modalRef.close(this.form.value);
  }

}
