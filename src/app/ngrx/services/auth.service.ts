import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, User, Result } from '../../domain';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
    '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  constructor(private http: HttpClient) { }

  login({ username, password }) {
    return this.http
      .get<User[]>('{host}/users', {
        params: { 'username': username, 'password': password }
      })
      .pipe(map(res => {
        console.log(res);
        if (res.length === 0) {
          throw new Error('Login Failed');
        }
        return {
          token: this.token,
          user: res[0]
        };
      }));
  }

  // login({ username, password }) {
  //   return this.http.post<Result>('{test}/user/auth', { username, password })
  //     .pipe(
  //       map(res => {
  //         if (!res.status) {
  //           throw new Error(res.message);
  //         }
  //         return {
  //           token: res.data.token,
  //           user: {
  //             id: '1',
  //             username: username
  //           }
  //         };
  //       })
  //     );
  // }

}
