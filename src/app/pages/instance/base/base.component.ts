import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  form: FormGroup;
  dataSet: any[];
  selected: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initValidators();
    this.careteData();
  }
  onRadioChange(data) {
    console.log(data);
    this.selected = data;
  }

  careteData() {
    this.dataSet = [];
    for (let i = 1; i < 5; i++) {
      this.dataSet.push({
        name: 'type' + i,
        vcpu: i * 2,
        mary: i * 8,
        disk: 120 * i
      });
    }
    this.selected = this.dataSet[0];
  }

  initValidators() {
    this.form = this.fb.group({
      name: [],
      souces: [],
    });
  }
}
