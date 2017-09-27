import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Module } from '../models/module.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModuleService {

  private modules: Module[] = [];

  public modulesSubject = new Subject<Module[]>();

  constructor(private databaseService: DatabaseService) {}

  // Retrieving the modules
  retrieveModules() {
      this.databaseService.getModules().subscribe(
        (tabs) => {
          this.modules = tabs;
          this.modulesSubject.next(this.modules.slice());
        },
        (error) => console.log(error)
      );
  }

  // Getting the modules
  getModules() {
    return this.modules.slice();
  }

  getModule(uid: string) {
    return this.modules.find(tab => tab.UID === uid);
  }

  // Creating a module by sending a post request
  createModule(module: Module) {
    this.databaseService.postModule(module).subscribe(
      response => {
        console.log(response);
        this.retrieveModules();
      }
    );
  }

  // removing the module
  removeModule(uid: string) {
    this.databaseService.deleteModule(uid).subscribe(
      response => {
        console.log(response);
        this.retrieveModules();
      }
    );
  }
  waterModule(uid: string) {
    this.databaseService.waterModule(uid).subscribe(
      response => {
        console.log(response);
        this.retrieveModules();
      }
    );
  }
}
