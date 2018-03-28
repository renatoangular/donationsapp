import Item from '../models/item.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  api_url = 'http://localhost:3000';
  itemUrl = `${this.api_url}/api/items`;

  constructor(
    private http: HttpClient
  ) { }


  createItem(item: Item): Observable<any> {
    return this.http.post(`${this.itemUrl}`, item);
  }

  getItems(): Observable<Item[]> {
    return this.http.get(this.itemUrl)
    .map(res  => {
      return res['data'].docs as Item[];
    });
  }

  editItem(item: Item) {
    const editUrl = '${this.itemUrl}';
    return this.http.put(editUrl, item);
  }

  deleteItem(id: string): any {
    const deleteUrl = '${this.itemUrl}/${id}';
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
