import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getApiList() {
    return this.http.get('{host}/apis');
  }
}
