import { OverView } from '../../domain/overview';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OverviewService {

  constructor(private http: HttpClient) { }

  loadOverView() {
    return this.http.get<OverView[]>('{host}/overview');
  }
}
