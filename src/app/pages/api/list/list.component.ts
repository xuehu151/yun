import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../ngrx/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataSet: any;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.getApiList().subscribe(res => {
      console.log(res);
      this.dataSet = res;
    });
  }

}
