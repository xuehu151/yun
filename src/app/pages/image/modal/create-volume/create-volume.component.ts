import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-volume',
  templateUrl: './create-volume.component.html',
  styleUrls: ['./create-volume.component.scss']
})
export class CreateVolumeComponent implements OnInit {
  data = {
    name: 'ambari-server',
    describe: '',
    source: 'ambari-server (4.56 GB)',
    type: '',
    size: '1',
    domain: 'nova'
  }
  constructor() { }

  ngOnInit() {
  }

}
