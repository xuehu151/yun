import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-disconnect-interfaces',
  templateUrl: './disconnect-interfaces.component.html',
  styleUrls: ['./disconnect-interfaces.component.scss']
})
export class DisconnectInterfacesComponent implements OnInit {

  form: FormGroup;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      network: ['', Validators.required]
    });
  }

  onCancel() {
    this.modalRef.close(false);
  }

  onOk() {
    this.modalRef.close(this.form.value);
  }

}
