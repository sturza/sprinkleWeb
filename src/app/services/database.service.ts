import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

  public url = 'https://sprinkle-sturza.c9users.io';

  constructor(private http: Http) {}

  // Sending a request to create a module
  postModule(tab: any) {
    return this.http.post(this.url + '/create-module/', tab)
  }

  getModules() {
    // Taking the modules from the server
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
  // Deleting a module from the list
  deleteModule(tabId: string) {
    console.log(tabId);
    return this.http.delete(this.url + '/delete-module/' + tabId);
  }

  // Requesting to activate the pomp and sprinle the plant
  waterModule(tabId: any) {
    return this.http.options(this.url + '/activate-pomp/' + tabId);

  }

  // Making a post request to add a stat
  postStat(tab: any) {
    return this.http.post(this.url + '/add-stat/', tab)
  }

  // Making a get request to retrieve all stats
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

  // Making a http request to delete a stat
  deleteStat(tabId: number) {
    console.log(tabId);
    return this.http.delete(this.url + '/delete-stat/' + tabId);
  }

  // Sending a post request to upload image for the module
  uploadFile(file: any) {
    console.log(file);
    return this.http.post(this.url + '/upload-file/', file);
  }

}
