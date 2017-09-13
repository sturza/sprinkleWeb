import { Injectable } from '@angular/core';
import {  Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';

@Injectable()
export class DatabaseService {

  private url = 'https://sprinkle-sturza.c9users.io';

  constructor(private http: Http) {}

  postTab(tab: any) {
    return this.http.post(this.url + '/add-stat/', tab)
  }

  getTabs() {
    return this.http.get(this.url + '/stats/')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Couldn\'t get tabs from server');
        }
      );
  }

  deleteTab(tabId: number) {
    console.log(tabId);
    return this.http.delete(this.url + '/delete-stat/' + tabId + '/');
  }

}
