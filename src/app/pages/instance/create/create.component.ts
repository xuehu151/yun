import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  form: FormGroup;


  dataSet: any[];
  selected: any;

  index: number;
  constructor(private fb: FormBuilder) {

    this.index = 0;
  }

  ngOnInit() {
    this.initValidators();
  }

  initValidators() {
    this.form = this.fb.group({
      name: [],
      souces: [],
    });
  }



  pre() {
    this.index--;
  }
  next() {
    this.index++;
  }

  done() {

  }



}
