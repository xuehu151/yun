import { Catalog } from '../../domain/catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  loadCatalogs() {
    return this.http.get<Catalog[]>('{host}/catalogs');
  }

}
