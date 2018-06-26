import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {


  @Input() title: string;
  @Input() desc: string;
  @Input() totle: number;
  @Input() value: number;
  @Input() newValue: number;

  constructor() { }

  ngOnInit() {

  }

}
