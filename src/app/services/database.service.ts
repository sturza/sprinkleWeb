import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Module } from 'app/models/module.model';
import { Stat } from 'app/models/stat.model';

import 'rxjs/add/operator/map'

@Injectable()
export class DatabaseService {

  public url = 'https://sprinkle-sturza.c9users.io';

  constructor(private http: HttpClient) {}

  getModules() {
    // Taking the modules from the server
    return this.http.get(this.url + '/modules/').map(this.mapModules);
  }

  mapModules = res => {
    return res.map(module => new Module(module))
  };

  // Sending a request to create a module
  addModule(module: any) {
    return this.http.post(this.url + '/add-module/', module)
  }

  // Removing a module from the list
  removeModule(moduleUID: string) {
    console.log(moduleUID);
    return this.http.delete(this.url + '/remove-module/' + moduleUID);
  }

  // Requesting to activate the pomp and sprinle the plant
  waterModule(moduleUID: string) {
    return this.http.options(this.url + '/activate-pump/' + moduleUID);

  }

  // Making a get request to retrieve all stats
  getStats() {
    return this.http.get(this.url + '/stats/').map(this.mapStats);
  }

  mapStats = res => {
    return res.map(stat => new Stat(stat))
  };

  // Making a post request to add a stat
  createStat(stat: any) {
    return this.http.post(this.url + '/create-stat/', stat)
  }

  // Making a http request to delete a stat
  deleteStat(statID: number) {
    console.log(statID);
    return this.http.delete(this.url + '/delete-stat/' + statID);
  }
}
