import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-edit-instance',
  templateUrl: './edit-instance.component.html',
  styleUrls: ['./edit-instance.component.scss']
})
export class EditInstanceComponent implements OnInit {


  form: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) { }

  ngOnInit() {
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
