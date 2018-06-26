import { Instance } from '../../domain/instance';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { tap, map } from 'rxjs/operators';
import { Result } from '../../domain';

/**
* This class provides the Instance service with methods to read names and add names.
*/
@Injectable()
export class InstanceService {

  constructor(private http: HttpClient) { }
  /**
  * Returns an Observable for the HTTP GET request for the JSON resource.
  * @return {string[]} The Observable for the HTTP request.
  */
  getInstances(id: any): Observable<Instance[]> {
    return this.http.get<Instance[]>('{host}/instances');
    // return this.http.post<Result>('{test}/instance/pagination', { page: 0 })
    //   .pipe(
    //     tap(res => {
    //       console.log(res);
    //     }),
    //     map(res => {
    //       return res.data.content;
    //     })
    //   );
  }
}
