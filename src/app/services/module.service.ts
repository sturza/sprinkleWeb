import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Module } from '../models/module.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModuleService {

  private modules: Module[] = [];

  public modulesSubject = new Subject<Module[]>();

  constructor(private databaseService: DatabaseService) {}

  retrieveModules() {
      this.databaseService.getModules().subscribe(
        (tabs) => {
          this.modules = tabs;
          this.modulesSubject.next(this.modules.slice());
        },
        (error)=> console.log(error)
      );
  }

  getModules() {
    return this.modules.slice();
  }

  getModule(id: number){
    return this.modules.find(tab => tab.id === id);
  }

  createModule(module: Module){
    this.databaseService.postModule(module).subscribe(
      response => console.log(response)
    );
  }

  removeModule(id: number) {
    this.databaseService.deleteModule(id).subscribe(
      response => console.log(response)
    );
  }
  waterModule(id: number){
    this.databaseService.waterModule(id).subscribe(
      response => console.log(response)
    );
  }
}
