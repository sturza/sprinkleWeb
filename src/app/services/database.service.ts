import { Injectable } from '@angular/core';
import {  Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';

@Injectable()
export class DatabaseService {

  public url = 'http://sprinkle-sturza.c9users.io';

  constructor(private http: Http) {}

  postModule(tab: any) {
    return this.http.post(this.url + '/create-module/', tab)
  }

  getModules() {
    return this.http.get(this.url + '/get-modules/')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Couldn\'t get modules from server');
        }
      );
  }
  deleteModule(tabId: number) {
    console.log(tabId);
    return this.http.delete(this.url + '/delete-module/' + tabId);
  }

  waterModule(tabId: any) {
    return this.http.options(this.url + '/activate-pomp/' + tabId);

  }

  postStat(tab: any) {
    return this.http.post(this.url + '/add-stat/', tab)
  }

  getStats() {
    return this.http.get(this.url + '/stats/')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Couldn\'t get stats from server');
        }
      );
  }
  deleteStat(tabId: number) {
    console.log(tabId);
    return this.http.delete(this.url + '/delete-stat/' + tabId);
  }

}
