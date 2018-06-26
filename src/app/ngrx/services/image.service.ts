import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../../domain';

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) { }

  loadImages() {
    return this.http.get<Image[]>('{host}/images');
  }
}
