import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volume } from '../../domain/volume';

@Injectable()
export class VolumeService {
  constructor(private http: HttpClient) { }

  loadVolumes() {
    return this.http.get<Volume[]>('{host}/volumes');
  }
}
