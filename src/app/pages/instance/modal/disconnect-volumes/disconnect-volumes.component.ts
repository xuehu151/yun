import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-disconnect-volumes',
  templateUrl: './disconnect-volumes.component.html',
  styleUrls: ['./disconnect-volumes.component.scss']
})
export class DisconnectVolumesComponent implements OnInit {

  form: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      volumes: ['', Validators.required]
    });
  }

  onCancel() {
    this.modalRef.close(false);
  }

  onOk() {
    this.modalRef.close(this.form.value);
  }
}
