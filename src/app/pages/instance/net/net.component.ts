import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.less']
})
export class NetComponent implements OnInit {


  list: any[] = [];
  checked = true;
  constructor() { }
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret = [];
    for (let i = 0; i < 10; i++) {
      ret.push({
        key: i.toString(),
        title: `network-${i + 1}`,
        description: `description of content${i + 1}`,
        direction: '',
        // icon: `frown-o`
      });
    }
    this.list = ret;
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
