import { Keypair } from '../../domain/keypair';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KeypairService {

  constructor(private http: HttpClient) { }

  getKeyPairs() {
    return this.http.get<Keypair[]>('{host}/keypairs');
  }
}
